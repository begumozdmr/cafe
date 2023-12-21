import Header from 'components/Header'
import React from 'react'

interface StartersType {
    id: number,
    name: string,
    comment: string,
    money: number
};

const StartersData: StartersType[] = [
    {
        id: 1,
        name: "Tomato Bruschetta",
        comment: "Tomatoes, Olive Oil, Cheese",
        money: 4
    },
    {
        id: 2,
        name: "Avocado & Mango Salsa",
        comment: "Avocado, Mango, Tomatoes",
        money: 5
    },
    {
        id: 3,
        name: "Marinated Grilled Shrimp",
        comment: "Fresh Shrimp, Oive Oil, Tomato Sauce",
        money: 7
    },
    {
        id: 4,
        name: "Baked Potato Skins",
        comment: "Potatoes, Oil, Garlic",
        money: 9
    },
    {
        id: 5,
        name: "Maitake Mushroom",
        comment: "Whipped Miso, Yaki Sauce, Sesame",
        money: 10
    },
    {
        id: 6,
        name: "Lobster Picante",
        comment: "Grilled Corn Elote, Queso Cotija, Chili",
        money: 12
    },
    {
        id: 7,
        name: "Jambon Iberico",
        comment: "Smoked Tomato Aioli, Idizabal Cheese, Spiced Pine Nuts",
        money: 10
    },

];

const MainCourse: StartersType[] = [
    {
        id: 1,
        name: "Braised Pork Chops",
        comment: "4 bone-in pork chops, olive oil, garlic, onion",
        money: 21
    },
    {
        id: 2,
        name: "Coconut Fried Chicken",
        comment: "8 chicken pieces, coconut milk, oil",
        money: 19
    },
    {
        id: 3,
        name: "Chicken with Garlic & Tomatoes",
        comment: "Chicken, cherry tomatoes, olive oil, dry white wine",
        money: 15
    },
    {
        id: 4,
        name: "Prime Rib",
        comment: "Rib, rosemary, black pepper, red wine",
        money: 25
    },
    {
        id: 5,
        name: "Sriracha Beef Skewers",
        comment: "Beef, garlic, sesame oil, vinegar",
        money: 18
    },
    {
        id: 6,
        name: "Crispy Tuna Fregola",
        comment: "Fregola, Baby Arugula Roasted, Green Olives, Pine Nuts",
        money: 22
    },
    {
        id: 7,
        name: "Charred Lamb Ribs",
        comment: "Za’atar, Turkish BBQ, Sesame Yoghurt",
        money: 20
    },

];

const Soups: StartersType[] = [
    {
        id: 1,
        name: "Terrific Turkey Chili",
        comment: "Turkey, oregano, tomato paste, peppers",
        money: 10
    },
    {
        id: 2,
        name: "Cream of Asparagus Soup",
        comment: "Asparagus, potato, celery, onion, pepper",
        money: 12
    },
    {
        id: 3,
        name: "Creamy Chicken & Wild Rice Soup",
        comment: "Cooked chicken, salt, butter, heavy cream",
        money: 9
    },
    {
        id: 4,
        name: "Italian Sausage Tortellini",
        comment: "Cheese tortellini, sausage, garlic, carrots, zucchini",
        money: 10
    },
    {
        id: 5,
        name: "Italian Sausage Soup",
        comment: "Italian sausage, garlic, carrots, zucchini",
        money: 10
    },
    {
        id: 6,
        name: "Ham and Potato Soup",
        comment: "Potatoes, ham, celery, onion, milk",
        money: 11
    },
];

const Desserts: StartersType[] = [
    {
        id: 1,
        name: "Summer Berry and Coconut Tart",
        comment: "Raspberries, blackberries, blueberries, graham cracker",
        money: 10
    },
    {
        id: 2,
        name: "Double Chocolate Cupcakes",
        comment: "Chocolate, eggs, vanilla, milk",
        money: 12
    },
    {
        id: 3,
        name: "Pumpkin Cookies Cream Cheese",
        comment: "Pumpkin, sugar, butter, eggs",
        money: 10
    },
];

export default function Menu() {
    return (
        <>
            <Header path='menu' title='Menu' comment="come and taste our delicacies" />

            <section className='gap'>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>
                                <div className='flex flex-col gap-2 items-center justify-start'>
                                    <span className='text-primary--color text-18 font-500'>- 1 -</span>
                                    <h1 className='text-60 text-submenu-normal--color'>Starters</h1>
                                    <div className='flex flex-col gap-2 w-full'>
                                        {
                                            StartersData.map((index: StartersType) => {
                                                return (
                                                    <React.Fragment key={index.id}>
                                                        <div className='w-full justify-between flex gap-1 mt-4 mb-4 items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-16 font-600 text-submenu-normal--color'>{index.name}</span>
                                                                <p className='text-14 font-400'>{index.comment}</p>
                                                            </div>
                                                            <span className='text-16 font-600 text-submenu-normal--color'>${index.money}.00</span>
                                                        </div>
                                                        <hr />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <img src={require("../img/menu-1-col.jpg")} alt='menu-1' className='w-auto h-auto m-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gap'>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>

                                <img src={require("../img/menu-1-col-2.jpg")} alt='menu-2' className='w-auto h-auto m-auto' />

                                <div className='flex flex-col gap-2 items-center justify-start'>
                                    <span className='text-primary--color text-18 font-500'>- 2 -</span>
                                    <h1 className='text-60 text-submenu-normal--color'>Main Course</h1>
                                    <div className='flex flex-col gap-2 w-full'>
                                        {
                                            MainCourse.map((index: StartersType) => {
                                                return (
                                                    <React.Fragment key={index.id}>
                                                        <div className='w-full justify-between flex gap-1 mt-4 mb-4 items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-16 font-600 text-submenu-normal--color'>{index.name}</span>
                                                                <p className='text-14 font-400'>{index.comment}</p>
                                                            </div>
                                                            <span className='text-16 font-600 text-submenu-normal--color'>${index.money}.00</span>
                                                        </div>
                                                        <hr />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gap'>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>

                                <div className='flex flex-col gap-2 items-center justify-start'>
                                    <span className='text-primary--color text-18 font-500'>- 3 -</span>
                                    <h1 className='text-60 text-submenu-normal--color'>Soups</h1>
                                    <div className='flex flex-col gap-2 w-full'>
                                        {
                                            Soups.map((index: StartersType) => {
                                                return (
                                                    <React.Fragment key={index.id}>
                                                        <div className='w-full justify-between flex gap-1 mt-4 mb-4 items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-16 font-600 text-submenu-normal--color'>{index.name}</span>
                                                                <p className='text-14 font-400'>{index.comment}</p>
                                                            </div>
                                                            <span className='text-16 font-600 text-submenu-normal--color'>${index.money}.00</span>
                                                        </div>
                                                        <hr />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <img src={require("../img/menu-1-col-3.jpg")} alt='menu-3' className='w-auto h-auto m-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gap'>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>

                                <img src={require("../img/menu-1-col-4.jpg")} alt='menu-4' className='w-auto h-auto m-auto' />

                                <div className='flex flex-col gap-2 items-center justify-start'>
                                    <span className='text-primary--color text-18 font-500'>- 4 -</span>
                                    <h1 className='text-60 text-submenu-normal--color'>Desserts</h1>
                                    <div className='flex flex-col gap-2 w-full'>
                                        {
                                            Desserts.map((index: StartersType) => {
                                                return (
                                                    <React.Fragment key={index.id}>
                                                        <div className='w-full justify-between flex gap-1 mt-4 mb-4 items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-16 font-600 text-submenu-normal--color'>{index.name}</span>
                                                                <p className='text-14 font-400'>{index.comment}</p>
                                                            </div>
                                                            <span className='text-16 font-600 text-submenu-normal--color'>${index.money}.00</span>
                                                        </div>
                                                        <hr />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
