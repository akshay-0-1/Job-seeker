import "./App.css";
import { createTheme, Divider, MantineProvider, Slider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import "@mantine/tiptap/styles.css";
import JobDescriptionPage from "./Pages/JobDescriptionPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import '@mantine/dates/styles.css';
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#f6f6f6", // 50
        "#e7e7e7", // 100
        "#d1d1d1", // 200
        "#b0b0b0", // 300
        "#888888", // 400
        "#6d6d6d", // 500
        "#5d5d5d", // 600
        "#4f4f4f", // 700
        "#454545", // 800
        "#3d3d3d", // 900
        "#2d2d2d", // 950
      ],

      "bright-sun": [
        "#fffbeb", // 50
        "#fff3c6", // 100
        "#ffe588", // 200
        "#ffd149", // 300
        "#ffbd20", // 400
        "#f99b07", // 500
        "#dd7302", // 600
        "#b75006", // 700
        "#943c0c", // 800
        "#7a330d", // 900
        "#461902", // 950
      ],
    },
    fontFamily: "poppins, sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider mr="xs" size="xs" mx="md" />

          <Routes>
          <Route path="/job-history" element={<JobHistoryPage/>} />
            <Route path="/posted-job" element={<PostedJobPage/>} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/job-desc" element={<JobDescriptionPage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalentPage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />}/>
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/login" element={<SignUpPage />}/>
            <Route path="/profile" element={<ProfilePage />}/>

            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
