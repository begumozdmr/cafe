import Button from 'components/Button';
import Header from 'components/Header'
import React from 'react';

interface TeamType {
    id: number,
    path: string,
    name: string,
    job: string,
    comment: string
};

const TeamData: TeamType[] = [
    {
        id: 1,
        path: "team-1.jpg",
        name: "Anna Smith",
        job: "chef",
        comment: "Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
    },
    {
        id: 2,
        path: "team-2.jpg",
        name: "Michel Carter",
        job: "manager",
        comment: "Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
    },
    {
        id: 3,
        path: "team-3.jpg",
        name: "Sara Burton",
        job: "finance",
        comment: "Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
    },
    {
        id: 4,
        path: "team-4.jpg",
        name: "Tyler Hart",
        job: "marketing",
        comment: "Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
    }
];

export default function Team() {
    return (
        <>
            <Header path='team' title='Met the Team' comment='we love what we do' />

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='flex flex-col gap-3 text-center'>
                            <p className='text-30'>
                                We are a diverse group from different cultures and backgrounds working toward the same goal. Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='grid--4'>
                        {
                            TeamData.map((index: TeamType) => {
                                return (
                                    <div className='flex flex-col gap-2 text-center' key={index.id}>
                                        <img src={require(`../img/${index.path}`)} alt='team' />
                                        <span className='text-24 mb-3'>{index.name}</span>
                                        <p className='text-primary--color uppercase font-600 text-14'>- {index.job} -</p>
                                        <p className='text-16'>{index.comment}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <span className='text-primary--color text-18 font-500'>- JOIN OUR TEAM -</span>
                            <h1 className='text-70 text-submenu-normal--color text-center'>We are looking for new talents</h1>
                            <Button value='contact us'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
