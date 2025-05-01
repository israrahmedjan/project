'use client';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/redux/slices/counterSlice'; // path adjust karein

export default function CounterUI() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="p-4 border rounded-md max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2">Counter: {count}</h2>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +5
      </button>
    </div>
  );
}
