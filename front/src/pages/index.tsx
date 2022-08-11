import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Layout } from "../components/Layout/Layout";
import { setgid } from "process";

type MemoType = {
  title: string;
  content: string;
  url: string;
};

const Home: NextPage = () => {
  const [memos, setMemos] = useState<MemoType[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const fetch = async () => {
    const res = await axios.get("http://localhost:3010/memo");
    setMemos(res.data);
  };

  const createMemo = async () => {
    await axios.post("http://localhost:3010/memo", {
      title: title,
      content: content,
      url: url,
    });
    setTitle("");
    setContent("");
    setUrl("");
    fetch();
  };

  const destroyMemo = async (id: any) => {
    await axios.delete(`http://localhost:3010/memo/${id}`);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Layout title='Home'>
        <div className='flex flex-col gap-3'>
          <input
            className='p-2'
            placeholder='Title'
            type='text'
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <input
            className='p-2'
            placeholder='Content'
            type='text'
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
          />
          <input
            className='p-2'
            placeholder='Url'
            type='text'
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='mt-2 text-center font-mono text-slate-50'
            onClick={createMemo}>
            Create Memo
          </button>
        </div>
        {memos.map((memo) => (
          <div key={memo.title}>
            <a href={memo.url} rel='noreferrer' target='_blank'>
              <p className='font-mono text-slate-50'>{memo.title}</p>
            </a>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default Home;

const TEXT = styled.p`
  color: red;
`;
