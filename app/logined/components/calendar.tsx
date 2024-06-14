import { useState } from 'react';
import Image from 'next/image';
import numbers from './numbers';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const lessonsChange = ['Ментальная арифметика', 'Программирование', 'Ментальная арифметика', 'Ментальная арифметика'];

const PickLesson = (props: { setCurrentLesson: any; show: any; setShow: any; }) => {
    const { setCurrentLesson, setShow, show } = props;

    return (
        <section className="w-[337px] h-[337px] fixed z-1 bg-white rounded-2xl border border-[#8D7FC7]">
            <section className="flex flex-col pt-16">
                {lessonsChange.map((el) => <button 
                onClick={(e) => {
                    const { target } = e;
                if (target instanceof HTMLElement) {
                    const { innerText } = target;
                    setCurrentLesson(innerText);
                    setShow(!show);
                };
                }}
                className="flex items-center h-[60px] text-start ps-10 hover:bg-[#8D7FC7]" key={el}>{el}</button>)}
            </section>
        </section>
    )
}

export default function Calendar() {
    const [currentLesson, setCurrentLesson] = useState('Выбрать предмет');
    const [show, setShow] = useState(false);
    const findClassNames = (value: string, el: string): string => {
        const answer = Number(value) === 1 ? true : false;
        if (Number(el) === 15) {
            return 'text-[#E12828]';
        }
        if (answer === true) {
            const secondAnswer = Number(el) > 26 ? true : false;
            if (secondAnswer === true) {
                return 'text-[#C8C5CD]';
            }
            return 'text-[#323854]';
        }
        return 'text-[#323854]';
    };

    return (
        <section className="h-[792px] grid grid-col-1 ps-8 w-full pt-4 gap-y-10">
            <section className="h-[48px] w-[1370px] flex justify-between">
                <button onClick={() => setShow(!show)} className={`border ${show === false ? 'border-[#ECECEC]' : 'border-[#8D7FC7]'} w-[337px] text-start rounded rounded-2xl text-[#79747F] ps-4 z-10`}>
                    <section className="flex items-center justify-between pe-4">{currentLesson}<Image src='/downarrow.png' width={32} height={32} alt='arrow' />
                    </section>
                </button>
                {show === true ? <PickLesson setCurrentLesson={setCurrentLesson} setShow={setShow} show={show} /> : false}
                <button className="rounded rounded-[3rem] bg-[#DECFFF] w-[459px] text-center">Изменить расписание</button>
            </section>
            <section className="flex flex-col w-[1370px] h-[725px]">
                <section className="h-[39px] flex gap-x-6 items-center">
                    <button><Image src='/Arrows, Diagrams.png' width={32} height={32} alt='left' /></button>
                    <h1>Март 2024</h1>
                    <button><Image src='/Arrows, Diagrams(1).png' width={32} height={32} alt='left' /></button>
                    <button className="border border-[#8D7FC7] rounded rounded-full w-[113px] h-[39px]">Сегодня</button>
                    <Image src='/Frame 1321315613.png' width={32} height={32} alt='left' />
                </section>
                <section className="flex flex-col">
                    <section className="flex">{days.map((el) => <section key={el} className="w-52 text-end">{el}</section>)}</section>
                    {Object.keys(numbers).map((el: string) => {
                        const value = el;
                        return <section key={el} className="flex">
                        {numbers[el].map((el) => 
                        <section key={el} className={`w-52 h-[132.4px] border border-[#ECECEC] text-end pe-2 ${findClassNames(value, String(el))}`}>
                            {el}</section>)}
                        </section>
                    })}
                </section>
            </section>
        </section>
    )
};