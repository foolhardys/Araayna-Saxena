import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { HomePage, LeadershipPage, CommunityPage, ContactPage, ExtraCurricularPage, ResearchPage, SocialMediaPage, SummerSchoolPage, Drums, Drama, Piano, Bharatnatyam, Debate, Error } from './pages'
import './App.css'


function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<LeadershipPage />} path="leadership" />
        <Route element={<ResearchPage />} path="research" />
        <Route element={<SocialMediaPage />} path="socialmedia" />
        <Route element={<SummerSchoolPage />} path="summerschool" />
        <Route element={<ExtraCurricularPage />} path="extracurricular" >
          <Route element={<Drums />} path="drums" />
          <Route element={<Piano />} path='piano' />
          <Route element={<Bharatnatyam />} path='bharatnatyam' />
          <Route element={<Drama />} path="drama" />
          <Route element={<Debate />} path="debate" />
        </Route>
        <Route element={<CommunityPage />} path="community" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<Error />} path="*" />
      </Route>
    </Routes>
  )
}

export default App


