import React, { useEffect, useState } from 'react'
import { Project, Projects } from '../interfaces/api';
import axios from 'axios';

export const useProjects = () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
      getProjects();
    }, []);
    
    const getProjects = async() => {
        setisLoading(true);
        const projectsResponse = await axios.get<Projects>(`${baseUrl}/api/proyectos/`);
        setProjects( projectsResponse.data.projects );
        setisLoading(false);
    }

    const deleteProject = async(e: any, projectId: string) => {
        e.preventDefault();
        const projectsResponse = await axios.delete<Projects>(`${baseUrl}/api/proyectos/${projectId}`);
        setProjects(
            projects.map(p => {
                if( p._id == projectId ) {
                    p.project_state = false
                }
                return p
            })
        )
    }

    return {
        projects,
        isLoading,
        deleteProject
    }
}