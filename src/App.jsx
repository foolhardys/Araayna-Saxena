import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { HomePage, LeadershipPage, CommunityPage, ContactPage, ExtraCurricularPage, ResearchPage, SocialMediaPage, SummerSchoolPage } from './pages'
import './App.css'


function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<LeadershipPage/>} exact path="/leadership"/>
        <Route element={<ResearchPage/>} exact path="/research"/>
        <Route element={<SocialMediaPage/>} exact path="/socialmedia"/>
        <Route element={<SummerSchoolPage/>} exact path="/summerschool"/>
        <Route element={<ExtraCurricularPage/>} exact path="/extracurricular"/>
        <Route element={<CommunityPage/>} exact path="/community"/>
        <Route element={<ContactPage/>} exact path="/contact"/>
      </Route>
    </Routes>
  )
}

export default App
