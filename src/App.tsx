import { HashRouter, Route, Routes } from 'react-router-dom'

import Navbar from '@/components/menu/Navbar'
import NotFound from '@/components/NotFound'
import Create from '@/pages/Create'
import CreateProfile from '@/pages/CreateProfile'
import Explorer from '@/pages/Explorer'
import Grant from '@/pages/Grant'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'

function App(): JSX.Element {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile/create' element={<CreateProfile />} />
				<Route path='/profile/:profileId' element={<Profile />} />
				<Route path='/grants/:grantId' element={<Grant />} />
				<Route path='/create' element={<Create />} />
				<Route path='/explore' element={<Explorer />}>
					<Route path='projects/:projectId' element={<></>} />
					<Route path='hypercerts/:hypercertId' element={<></>} />
				</Route>
				<Route path='*' element={<NotFound />} />T
			</Routes>
		</HashRouter>
	)
}

export default App
