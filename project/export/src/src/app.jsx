// SCOPE — App entry & router

const App = () => {
  const [route, navigate] = useRouter();

  // Split "school/<id>" → ['school', id]
  const parts = route.split('/');
  const view = parts[0];
  const param = parts[1];

  let page = null;
  switch (view) {
    case 'home':       page = <HomePage navigate={navigate} />; break;
    case 'how-it-works': page = <HowItWorksPage navigate={navigate} />; break;
    case 'families':   page = <FamiliesPage navigate={navigate} />; break;
    case 'schools':    page = <SchoolsPage navigate={navigate} />; break;
    case 'quiz':       page = <QuizPage navigate={navigate} />; break;
    case 'school':     page = <SchoolProfilePage navigate={navigate} schoolId={param || 'hillside'} />; break;
    case 'about':      page = <AboutPage navigate={navigate} />; break;
    case 'faq':        page = <FAQPage navigate={navigate} />; break;
    case 'privacy':    page = <PrivacyPage navigate={navigate} />; break;
    case 'signin':     page = <SignInPage navigate={navigate} />; break;
    default:           page = <HomePage navigate={navigate} />; break;
  }

  return (
    <React.Fragment>
      <Nav route={view} navigate={navigate} />
      <main key={route}>{page}</main>
      <Footer navigate={navigate} />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
