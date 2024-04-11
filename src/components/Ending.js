import React, { useEffect, useState } from 'react';

const Ending = (props) => {
    const [endingState, setEndingState] = useState(false);

    useEffect(() => {
        const restart = document.querySelector('.restart');
        const credit = document.querySelector('.credit');
        restart.addEventListener('mouseenter', () => {
            credit.classList.add('inactive');
        });

        restart.addEventListener('mouseleave', () => {
            credit.classList.remove('inactive');
        });
        credit.addEventListener('mouseenter', () => {
            restart.classList.add('inactive');
        });

        credit.addEventListener('mouseleave', () => {
            restart.classList.remove('inactive');
        });
    }, [])

    const handleEndingEvent = (e) => {
        if (e === "restart") {
            const parable = {
                event_id: 0,
                event_label: "",
                choice_a: 2,
                choice_b: 3,
                topic: "일어날 것인가?",
            };
            props.onClick(parable);
        } else if (e === "credit") {

        }
    }


    return (
        <div style={
            {
                display: 'flex',
                width: "100%",
                height: "720px"
            }
        }>
            <div className='ending'>
                <div className='ending-choice' style={{ display: "flex", flexDirection: "column" }}>
                    {
                        props.event_id === 17 ? (
                            <div className="creditContainer" style={{ display: "flex", flexDirection: "column", fontSize: "32px" }}>
                                <label className='teamTitle'>팀 시시포스</label>
                                <div style={{ display: "flex" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: "10px" }}>
                                        <label className='role'>연출, 기획, 각본</label>
                                        <label className='name'>오수현</label>
                                        <label className='name'>이사빈</label>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: "10px" }}>
                                        <label className='role'>촬영 및 편집</label>
                                        <label className='name'>조지영</label>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                                    <label className='role'>제작에 도움을 주신 분들</label>
                                    <div style={{ display: "flex" }}>
                                        <label className='name'>이승준</label>
                                        <label className='name'>박준형</label>
                                        <label className='name'>장태호</label>
                                        <label className='name'>오윤아</label>
                                    </div>
                                </div>
                                <div className='choice restart' onClick={(e) => handleEndingEvent("restart")}>
                                    <label style={{ margin: "10px", fontSize: "32px" }}>
                                        처음으로 돌아가기
                                    </label>
                                </div>
                                <div className='choice credit' onClick={(e) => handleEndingEvent("credit")}>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='choice restart' onClick={(e) => handleEndingEvent("restart")}>
                                    <label style={{ margin: "10px", fontSize: "64px" }}>
                                        처음으로 돌아가기
                                    </label>
                                </div>
                                <div className='choice credit' onClick={(e) => handleEndingEvent("credit")}>
                                    <label style={{ margin: "10px", fontSize: "32px" }}>
                                        크레딧 보기
                                    </label>
                                </div>

                            </div>
                        )
                    }
                    {/* <div className='choice restart' onClick={(e) => handleEndingEvent("restart")}>
                        <label style={{ margin: "10px", fontSize: "64px" }}>
                            처음으로 돌아가기
                        </label>
                    </div>
                    <div className='choice credit' onClick={(e) => handleEndingEvent("credit")}>
                        <label style={{ margin: "10px", fontSize: "32px" }}>
                            크레딧 보기
                        </label>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Ending;
