import { GoTopBtn } from './components/goTopBtn/GoTopBtn';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Careers } from './layout/section/careers/Careers';
import { Contacts } from './layout/section/contacts/Contacts';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Testimony } from './layout/section/testimony/Testimony';
import { Works } from './layout/section/works/Works';

function App() {
  return(
    <div>
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Testimony/>
      <Careers/>
      <Contacts/>
      <Footer/>
      <GoTopBtn/>
    </div>
  )
}

export default App


