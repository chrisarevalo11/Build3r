import { HashRouter, Route, Routes } from 'react-router-dom'

import Navbar from '@/components/Navbar/Navbar'

import Create from './pages/Create'
import Explorer from './pages/Explorer'
import Home from './pages/Home'

function App(): JSX.Element {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile/:profileId' element={<></>} />
				<Route path='/create' element={<Create />} />
				<Route path='/explore' element={<Explorer />}>
					<Route path='projects/:projectId' element={<></>} />
					<Route path='hypercerts/:hypercertId' element={<></>} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</HashRouter>
	)
}

export default App
