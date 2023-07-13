import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../Components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import FileDetailsPage from '../FileDetailsPage/FileDetailsPage';
import NewFilePage from '../NewFilePage/NewFilePage';

export default function App() {
<<<<<<< HEAD
  const [user, setUser] = useState(true);
  const [files, setFiles] = useState([]);
=======
	const [user, setUser] = useState(null);
	const [files, setFiles] = useState([]);
	const navigate = useNavigate();
>>>>>>> Dev

	// useEffect(() => {
	//   async function getFiles() {
	//     const allListItems = await
	//     setFiles(files);
	//   };
	//   if (user) getFiles();
	//   console.log(files)
	// }, [user]
	// )

<<<<<<< HEAD
  return (
    <main className="App">
      {user ?
        <div>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route exact path="/newfile" element={<NewFilePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/" element={<DashboardPage files={files} />} />
            <Route exact path="/filedetails" element={<FileDetailsPage />} />
          </Routes>
        </div>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
=======
	function handleLogout() {
		setUser(null);
		setFiles([]);
		localStorage.removeItem('token');

		alert('You have been logged out!');
		navigate('/');
	}

	async function fetchUser(token) {
		try {
			const res = await fetch('http://localhost:8000/users/me', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});

			if (res.status === 200) {
				const resObj = await res.json();
				console.log({ 'GetUser status 200': resObj });
				setUser(resObj);
				navigate('/');
			}
		} catch (err) {
			handleLogout();
			console.log(err);
		}
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			fetchUser(localStorage.getItem('token'));
		}
	}, []);

	return (
		<main className='App'>
			{user ? (
				<div>
					<NavBar user={user} setUser={setUser} handleLogout={handleLogout} />
					<Routes>
						<Route exact path='/' element={<DashboardPage user={user} files={files} user={user}/>} />
						<Route exact path='/about' element={<AboutPage />} />
						<Route exact path='/newfile' element={<NewFilePage user={user} />} />
						<Route exact path='/filedetails/:id' element={<FileDetailsPage user={user}/>} />
            
					</Routes>
				</div>
			) : (
				<AuthPage setUser={setUser} fetchUser={fetchUser} handleLogout={handleLogout} />
			)}
		</main>
	);
}
>>>>>>> Dev
