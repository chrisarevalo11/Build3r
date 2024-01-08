import { HashRouter, Route, Routes } from 'react-router-dom'

import Footer from '@/components/menu/Footer'
import Navbar from '@/components/menu/Navbar'
import NotFound from '@/components/NotFound'
import { Toaster } from '@/components/ui/toaster'
import Create from '@/pages/Create'
import Explorer from '@/pages/Explorer'
import Grant from '@/pages/Grant'
import Home from '@/pages/Home'
import MyProfile from '@/pages/MyProfile'
import Profile from '@/pages/Profile'

function App(): JSX.Element {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<MyProfile />} />
				<Route path='/create' element={<Create />} />
				<Route path='/explore' element={<Explorer />} />
				<Route path='/explore/:profileId' element={<Profile />} />
				<Route path='/explore/:anchor/:grantId' element={<Grant />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Toaster />
			<Footer />
		</HashRouter>
	)
}

export default App
