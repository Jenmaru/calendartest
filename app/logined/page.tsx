'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import menuButtons from '../icons/menuButtonMass';
import MainSubPage from './components/main';
import Calendar from './components/calendar';
import DropWindow from './components/dropWindow';

type pagesType = { pages: { currentPage: number, }};

export default function LK() {
    const route = useRouter();
    const [show, setShow] = useState<boolean>(false);
    const userLogined = useSelector((state: pagesType): { currentPage: number } => {
        const { pages } = state;
        return pages;
      })
    const { icons, names } = menuButtons;
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <main className="flex">
            <section className="w-[382px] h-[874px]">
                <section className="mt-[32px] ms-[67px] rounded-[3rem] w-[315px] h-[880px] bg-[#EEEEFF] grid justify-center">
                    <section className="grid justify-center">
                    <Image
                        src="/logo(1).png"
                        alt="Logo"
                        width={197}
                        height={107}
                        priority
                        className="pt-16"
                    />
                    </section>
                    <section className="grid justify-center w-80 me-8">
                        {icons.map((el, index) => <button onClick={(e) => {
                            setCurrentPage(index + 1)}} id={String(index + 1)} key={index} className="flex w-72 h-[48px] items-center gap-x-4 focus:bg-[#8D7FC7] focus:rounded-e-[3rem] text-lg text-[#434B74] hover:text-xl ps-12"><Image src={el} width={37} height={37} alt="icon" />{names[index]}</button>)}
                    </section>
                    <Image
                        src="/Referral.png"
                        alt="Logo"
                        width={261}
                        height={154}
                        priority
                        className="pt-16 ms-11"
                    />
                </section>
            </section>
            <section className="w-[1539px] h-[874px]">
                <section className="grid grid-col-1">
                    <section className="h-[82px] shadow-2xl rounded-3xl flex items-center justify-end pe-20 gap-x-4">
                        <Image src='/chat icon.png' width={56} height={56} alt='chat' />
                        <section className="flex">
                        <Image src='/avatar.png' width={56} height={56} alt='avatar' />
                        <button onClick={() => setShow(!show)}><Image src='/downarrow.png' width={32} height={32} alt='arrow' /></button>
                        </section>
                    </section>
                    {show === false ? false : <DropWindow show={show} setShow={setShow} route={route} />}
                    {currentPage === 1 ? <MainSubPage /> : <Calendar />}
                </section>
            </section>
        </main>
    )
};