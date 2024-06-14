import Image from 'next/image';
import { SetStateAction, Dispatch } from 'react';

export default function DropWindow(props: { route: any; show: boolean; setShow: Dispatch<SetStateAction<boolean>>; }) {
    const inDropItems = ['Смена пользователя', 'Михаил', 'Анна', 'Выход'];
    const { route, show, setShow } = props;

    return (
        <section className="flex border border-[#7362BC] w-[333px] h-[314.4px] z-10 fixed bg-white rounded rounded-xl mt-[83px] ms-[1068px]">
            <section className="flex flex-col">
            <section className="ms-64 -mt-4">
                <Image src='/Polygon 2.png' width={21} height={14} alt='arrow' /> 
            </section>
            <section className="flex flex-col gap-y-6 pt-8 ps-8">
                {inDropItems.map((el, index) => {
                    if (index === 0) {
                        return <section key={el} className="text-xl">{el}</section>
                    }
                    return index === 3 ? <button onClick={() => {
                        localStorage.setItem('key', '') 
                        location.reload()
                        setShow(!show)}} 
                        className="flex justify-between items-center border-t border-t-[#EEEEFF] w-[270px]">
                            <section key={el} className="text-xl text-[#008AFF] pt-4">
                                {el}
                            </section>
                            <Image src="/exit.png" width={32} height={32} alt="exit" className="pt-4" />
                        </button> :
                        <button key={el} className={`flex gap-x-4 ps-4 ${index === 1 ? 'rounded rounded-3xl bg-[#EEEEFF] items-center h-16' : ''}`}>
                            <section><Image src={index === 1 ? '/avatar.png' : '/avatar2.png'} width={43} height={43} alt='ava' /></section> 
                            <section>{index === 1 ? <section className="flex flex-col"><h1>{el}</h1><h1 className="text-xs text-start">
                                Это вы</h1></section> : el}</section>   
                        </button>;
                })}
            </section>
            </section>
        </section>
    )
}