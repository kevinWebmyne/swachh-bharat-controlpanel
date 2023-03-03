import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import CmsBlockEdit from './component/CmsBlock/CmsBlockEdit'
import CmsBlockView from './component/CmsBlock/CmsBlockView'
import ContactView from './component/Contact/ContactView'
import CountryAdd from './component/Country/CountryAdd'
import CountryEdit from './component/Country/CountryEdit'
import CountryView from './component/Country/CountryView'
import DonorView from './component/Donor/DonorView'
import Home from './component/Home'
import LanguageAdd from './component/Language/LanguageAdd'
import LanguageEdit from './component/Language/LanguageEdit'
import LanguageView from './component/Language/LanguageView'
import Login from './component/Login'
import OurImpactAdd from './component/OurImpact/OurImpactAdd'
import OurImpactEdit from './component/OurImpact/OurImpactEdit'
import OurImpactView from './component/OurImpact/OurImpactView'
import PageNotFound from './component/PageNotFound'
import PageEdit from './component/Pages/PageEdit'
import PageView from './component/Pages/PageView'
import PledgeView from './component/Pledge/PledgeView'
import PrivateComponent from './component/PrivateComponent'
import ProgrammesAdd from './component/Programmes/ProgrammesAdd'
import ProgrammesEdit from './component/Programmes/ProgrammesEdit'
import ProgrammesView from './component/Programmes/ProgrammesView'
import RegisterVolunteerView from './component/RegisterVolunteer/RegisterVolunteerView'
import SliderAdd from './component/Slider/SliderAdd'
import SliderEdit from './component/Slider/SliderEdit'
import SliderView from './component/Slider/SliderView'
import StateAdd from './component/State/StateAdd'
import StateEdit from './component/State/StateEdit'
import StateV from './component/State/StateV'
import UserAdd from './component/Users/UserAdd'
import UserEdit from './component/Users/UserEdit'
import UserView from './component/Users/UserView'
import VolunteerAdd from './component/VolunteerData/VolunteerAdd'
import VolunteerEdit from './component/VolunteerData/VolunteerEdit'
import VolunteerView from './component/VolunteerData/VolunteerView'

const Routers = () => {
    return (
        <Routes>
            <Route element={< PrivateComponent />}>
                <Route exact path="/home" element={< Home />}></Route>
                <Route exact path="/stateView" element={< StateV />}></Route>
                <Route exact path="/stateAdd" element={< StateAdd />}></Route>
                <Route exact path="/state/:id" element={< StateEdit />}></Route>
                <Route exact path="/languageView" element={< LanguageView />}></Route>
                <Route exact path="/languageAdd" element={< LanguageAdd />}></Route>
                <Route exact path="/language/:id" element={< LanguageEdit />}></Route>
                <Route exact path="/countryView" element={<  CountryView />}></Route>
                <Route exact path="/countryAdd" element={< CountryAdd />}></Route>
                <Route exact path="/country/:id" element={< CountryEdit />}></Route>
                <Route exact path="/pageView" element={< PageView />}></Route>
                <Route exact path="/page/:id" element={< PageEdit />}></Route>
                <Route exact path="/volunteerDataView" element={< VolunteerView />}></Route>
                <Route exact path="/volunteerDataAdd" element={< VolunteerAdd />}></Route>
                <Route exact path="/volunteerData/:id" element={< VolunteerEdit />}></Route>
                <Route exact path="/sliderView" element={< SliderView />}></Route>
                <Route exact path="/sliderAdd" element={< SliderAdd />}></Route>
                <Route exact path="/slider/:id" element={< SliderEdit />}></Route>
                <Route exact path="/ourImpactView" element={< OurImpactView />}></Route>
                <Route exact path="/ourImpactAdd" element={< OurImpactAdd />}></Route>
                <Route exact path="/ourImpact/:id" element={< OurImpactEdit />}></Route>
                <Route exact path="/pledgeView" element={< PledgeView />}></Route>
                <Route exact path="/donorView" element={< DonorView />}></Route>
                <Route exact path="/programmesView" element={< ProgrammesView />}></Route>
                <Route exact path="/programmesAdd" element={< ProgrammesAdd/>}></Route>
                <Route exact path="/programmes/:id" element={< ProgrammesEdit />}></Route>
                <Route exact path="/contactView" element={< ContactView />}></Route>
                <Route exact path="/registerVolunteerView" element={< RegisterVolunteerView />}></Route>
                <Route exact path="/cms/:id" element={< CmsBlockEdit />}></Route>
                <Route exact path="/cmsView" element={< CmsBlockView />}></Route>
                <Route exact path="/userView" element={<  UserView />}></Route>
                <Route exact path="/userAdd" element={< UserAdd />}></Route>
                <Route exact path="/user/:id" element={< UserEdit />}></Route>
                <Route exact path="/*" element={< PageNotFound />}></Route>
            </Route>
            <Route exact path="/" element={< Login />}></Route>
        </Routes>
    )
}

export default Routers