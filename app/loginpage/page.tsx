'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import translation from '../simpleTranslate';
import { useRouter } from 'next/navigation';
import { actions } from '../slices/Members';

type logined = {
    members: { email: string, password: string },
}

type lang = {
    [key: string]: boolean;
    RU: boolean;
    EN: boolean;
}

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const userLogined = useSelector((state: logined): { email: string, password: string } => {
    const { members } = state;
    return members;
  })
  const [toggle, setToggle] = useState<lang>({ RU: true, EN: false });
  const [translate, setTranslate] = useState(toggle.RU === true ? translation.RU : translation.EN);
  const formData = {
    email: "",
    password: "",
    radio: "",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    userLogined.email.length > 6 ? localStorage.setItem( 'key', 'success' ) : ''; 
    setTranslate(toggle.RU === true ? translation.RU : translation.EN);
  }, [navigate, toggle.RU, userLogined, userLogined.email.length]);

  return (
    <main className="h-screen flex flex-col items-center justify-between pt-36 mt-2">
      <Image
        src="/Logomark_1_.png"
        alt="Logo"
        width={107}
        height={107}
        priority
      />
      <h1 className="text-5xl pt-7 textlabel font-sans">{translate.title}</h1>
      <form onSubmit={() => dispatch(actions.newMember({ email: email, password: password }))} className="flex flex-col w-[440px] pt-3">
        {Object.keys(formData).map((el) => 
        el !== "radio" ?
          <input
              key={el}
              id={el}
              name={el}
              placeholder={el === 'email' ? 'E-mail' : translate.placeholder}
              onChange={(e) => el === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)}
              className="rounded-lg border border-2 border-gray-100 p-2 mt-3 hover:border-violet-400" />
             : 
          <section className="flex items-center mt-4" key={el}>
          <input
             key={el}
             type="checkbox"
             id={el}
             name={translate.remember}
             value={el}
             onChange={(e) => e}
             className="rounded-xl ms-1 h-5 w-5" />
          <text className="ms-2 text-gray-500 text-sm">{translate.remember}</text></section>
          )}
          <button type="submit" className="border bg-violet-400 hover:bg-violet-500 p-2 mt-8 rounded-full button h-[64px] text-white font-bold text-xl">
            {translate.mainButton}
          </button>
      </form>
      <section className="flex justify-between w-[440px] mt-4 text-sm">
        <button className="textbut text-lg">
          {translate.forgot}
        </button>
        <button className="textbut text-lg">
          {translate.coach}
        </button>
      </section>
      <h1 className="mt-16 pt-2 text-lg">
        {translate.account}
      </h1>
      <button className="textbut text-lg pt-2">
          {translate.register}
      </button>
      <section className="pt-28 pb-8 flex justify-between">
        {Object.keys(toggle).map((el) => <button onClick={(e) => {
          const { target } = e;
          if (target instanceof HTMLElement) {
            const { innerText } = target;
            const { RU, EN } = toggle;
            toggle[innerText] === true ? '' : setToggle({ RU: !RU, EN: !EN });
          };
        }}
        key={el} type="button" className={ toggle[el] === true 
          ? "text-violet-400 text-3xl text-gray-500 w-11" 
          : "text-lg text-gray-500 w-11"}>
          {el}
        </button>)}
      </section>
    </main>
  );
}
