import Image from 'next/image';
import border from './border';

export default function MainSubPage() {
    return (
        <section className="h-[792px] grid grid-col-1 ps-8 w-full pt-4">
            <section className="h-[298px] flex gap-x-6">
                <section className="bg-[#7362BC] h-full w-[660px] rounded-[3rem] grid grid-col-2 items-center text-white">
                    <section className="w-[440px] h-40 flex flex-col gap-y-6 ps-12">
                    <h1 className="text-4xl">
                        До 31 декабря любой курс со скидкой 20%
                    </h1>
                    <p>
                        До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!
                    </p>
                    </section>
                    <Image src="/SF21.png" className="z-10 fixed rounded-e-[3rem] ms-[430px]" width={231} height={298} alt="cartoon"/>
                </section>
                <section className="bg-[#FFF1CB] w-[459px] rounded-[3rem] flex justify-center items-center">
                    <section className="w-72 flex flex-col justify-center gap-y-8">
                        <h1 className="text-2xl text-center">
                            Следующее занятие начнется через:
                        </h1>
                        <section className="flex justify-center">
                            <section className="flex items-end me-8">
                                <h1 className="text-4xl me-2">
                                    6
                                </h1>
                                <p>
                                    д
                                </p>
                            </section>
                            <section className="flex items-end me-8">
                            <h1 className="text-4xl me-2">
                                12
                            </h1>
                            <p>
                                ч
                            </p>
                            </section>
                            <section className="flex items-end">
                            <h1 className="text-4xl me-2">
                                24
                            </h1>
                            <p>
                                мин
                            </p>
                            </section>
                        </section>
                        <button className="border-2 border-black border-dashed rounded-[3rem] h-[57.6px]">Button</button>
                    </section>
                </section>
                <section className="grid grid-col-2 h-full w-[216px]">
                    <section className="bg-[#D8ECFF] rounded-[2rem] h-[149px]">
                        <p className="w-12 pt-4 ps-4">
                            Домашние задания
                        </p>
                    </section>
                    <section className="bg-[#E8CBFF] rounded-[2rem] h-[149px]">
                        <p className="w-36 pt-4 ps-4">
                            Отчеты от учителей
                        </p> 
                    </section>
                </section>
            </section>
            <section className="h-[446px] flex gap-x-6">
                <section className="border-2 border-[#7362BC] rounded-[3rem] h-full w-[445px] flex flex-col justify-center gap-y-10">
                    <section className="flex flex-col gap-y-8">
                    <h1 className="ps-8 text-2xl text-[#323854]">{border.balanceLessons[0]}</h1>
                    <section className="ps-8 pe-8 flex flex-col">
                        {border.lessons.map((el, index) => <section key={el} className="flex justify-between items-center text-lg text-[#323854] h-[74px] border-b border-b-[#EEEEFF]">
                            {el}<section className="bg-[#EEEEFF] text-2xl rounded-full w-[52px] h-[52px] flex justify-center items-center">{border.hoursLessons[index]}</section>
                        </section>)}
                    </section>
                    </section>
                    <button className="rounded-[3rem] border ms-8 me-8 h-[48px] bg-[#DECFFF]">Button</button>
                </section>
                <section className="border-2 border-[#7362BC] rounded-[3rem] h-full w-[915px] flex flex-col justify-center gap-y-10">
                <section className="flex flex-col gap-y-8">
                    <h1 className="ps-8 text-2xl text-[#323854]">{border.balanceLessons[0]}</h1>
                    <section className="ps-8 pe-8 flex flex-col">
                        {border.dates.map((el, index) => 
                        <section key={el} className="flex gap-x-10 h-[74px] border-b border-b-[#EEEEFF] items-center text-lg text-[#323854]">
                            <section className="w-8 flex flex-col text-4xl text-center">{el}
                                <section className="text-xs">{border.months[index]}</section>
                            </section>
                            <section className="text-lg w-[250px] h-[52px] flex justify-start items-center">{border.lessons[index]}</section>
                            <section className="text-xs rounded-full w-[100px] h-[52px] flex justify-start items-center">{border.time[index]}</section>
                            <section className="text-xs rounded-full w-[160px] h-[52px] flex justify-start items-center"><Image src='/teachicon.png' width={21} height={21} alt='icon' />{border.teacher[index]}</section>
                            <section className="text-sm rounded-full gap-x-2 w-[140px] h-[52px] flex justify-between items-center">
                                <button className="border rounded-3xl w-[75px] h-[39px] border-[#8D7FC7]">Button</button>
                                <button className="border rounded-3xl w-[75px] h-[39px] bg-[#8D7FC7] text-white">Button</button>    
                            </section>
                        </section>)}
                    </section>
                </section>
                    <button className="rounded-[3rem] border ms-[270px] w-[377px] h-[48px] bg-[#DECFFF]">Button</button>
                </section>
            </section>
        </section>
    )
}