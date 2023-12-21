import Contact from 'pages/Contact'
import Gallery from 'pages/Gallery'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import Reservation from 'pages/Reservation'
import Team from 'pages/Team'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    )
}
