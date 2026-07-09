import { useState } from 'react'
import './App.css'
import ProgressCard from './components/ProgressCard'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import LessonHomePage from './pages/LessonsPage'
import { Route, Routes } from 'react-router-dom'
import LessonPage from './pages/LessonPage'
import ProtectedRoute from './components/ProtectedRoute'
import ShopPage from './pages/ShopPage'
import PracticePage from './pages/PracticePage'
import PracticeLessonPage from './pages/PracticeLessonPge'
import VocabularyPage from './pages/VocabularyPage'
import SettingsPage from './pages/SettingsPage'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import { useProfile } from './hooks/useProfile'
import TeacherAssignmentsPage from './pages/TeacherAssignmentsPage'
import TeacherAnalyticsPage from './pages/TeacherAnalyticsPage'
import TeacherClassesPage from './pages/TeacherClassesPage'
import LandingPage from './pages/LandingPage'
import StudentAssignmentsPage from './pages/StudentAssignmentsPage'
import CustomLessonPage from './pages/CustomLessonPage'

export default function App() {
    const profile = useProfile();

    return (
        <ThemeProvider userId={profile?.id}>

            <SidebarProvider>

                <Routes>

                    <Route
                        path='/'
                        element={
                            <LandingPage />
                        }
                    />

                    <Route
                        path='/login'
                        element={<LoginPage />}
                    />

                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/lessons'
                        element={
                            <ProtectedRoute>
                                <LessonHomePage />
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path='/lesson/:id'
                        element={
                            <ProtectedRoute>
                                <LessonPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path='/shop'
                        element={
                            <ProtectedRoute>
                                <ShopPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route 
                        path='/practice'
                        element={
                            <ProtectedRoute>
                                <PracticePage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/practice/:id'
                        element={
                            <ProtectedRoute>
                                <PracticeLessonPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/vocabulary'
                        element={
                            <ProtectedRoute>
                                <VocabularyPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/settings'
                        element={
                            <ProtectedRoute>
                                <SettingsPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/teacher/assignments'
                        element={
                            <ProtectedRoute>
                                <TeacherAssignmentsPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/teacher/analytics'
                        element={
                            <ProtectedRoute>
                                <TeacherAnalyticsPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/teacher/classes'
                        element={
                            <ProtectedRoute>
                                <TeacherClassesPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/assignments'
                        element={
                            <ProtectedRoute>
                                <StudentAssignmentsPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/custom-lesson/:id'
                        element={
                            <ProtectedRoute>
                                <CustomLessonPage />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </SidebarProvider>
    
        </ThemeProvider>
    )
}