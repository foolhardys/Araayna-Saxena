import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { HomePage, LeadershipPage, Recognitions, CommunityPage, ContactPage, ExtraCurricularPage, ProjectsPage, SummerSchoolPage, Drums, Drama, Piano, Bharatnatyam, Error, Brewscape, Author, Book } from './pages'
import './App.css'


function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<LeadershipPage />} path="leadership" />
        <Route element={<ProjectsPage />} path="projects" />
        <Route element={<Author />} path="author" />
        <Route element={<Book />} path='book' />
        <Route element={<Recognitions />} path='recognitions' />
        <Route element={<SummerSchoolPage />} path="summerschool" />
        <Route element={<ExtraCurricularPage />} path="extracurricular" >
          <Route element={<Drums />} path="drums" />
          <Route element={<Piano />} path='piano' />
          <Route element={<Bharatnatyam />} path='bharatnatyam' />
          <Route element={<Drama />} path="drama" />
        </Route>
        <Route element={<CommunityPage />} path="community" />
        <Route element={<Brewscape />} path='brewscape' />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<Error />} path="*" />
      </Route>
    </Routes>
  )
}

export default App


