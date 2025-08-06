import React, { useEffect, useRef, useCallback, useState } from "react";

const InfiniteScroll = () => {
  const observerRef = useRef();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate network delay

    const newItems = Array.from(
      { length: 6 },
      (_, i) => `🔥 Skill unlocked: #${items.length + i + 1}`
    );

    setItems((prev) => [...prev, ...newItems]);

    if (items.length + newItems.length >= 42) {
      setHasMore(false);
    }

    setLoading(false);
  }, [items, loading, hasMore]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && hasMore) {
        loadMore();
      }
    },
    [hasMore, loading, loadMore]
  );

  useEffect(() => {
    loadMore(); // Load initial items on mount

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px 0px 300px 0px",
      threshold: 0,
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [handleObserver, loadMore]);

  return (
    <div className='w-full px-4 py-12 flex flex-col items-center justify-center bg-[#0e0e10]'>
      {/* 🧠 Title */}
      <p
        className='relative z-10 mb-10 inline-block rounded-full border border-cyan-500 bg-cyan-400/10 px-5 py-3 text-sm font-bold tracking-widest text-cyan-100 shadow-md backdrop-blur-sm md:text-lg'
        style={{
          fontFamily: "'Orbitron', sans-serif",
          textShadow: "0 0 8px #00ffff88",
        }}
      >
        FULL STACK DEV 💻 | MERN STACK | NEXT.JS | UI DESIGNER | API MASTER 🧠 |
        DB SCHEMER
      </p>

      {/* 💻 Items */}
      <div className='grid w-full max-w-3xl gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className='animate-fadeIn rounded-lg bg-zinc-800 p-4 text-white shadow-md transition-all duration-300 hover:scale-[1.02]'
          >
            {item}
          </div>
        ))}
      </div>

      {/* 🔁 Observer */}
      <div ref={observerRef} className='h-20 w-full' />

      {/* 🌀 Loader */}
      {loading && (
        <div className='flex justify-center py-4'>
          <span className='h-6 w-6 animate-spin rounded-full border-2 border-t-cyan-400 border-b-cyan-400'></span>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
