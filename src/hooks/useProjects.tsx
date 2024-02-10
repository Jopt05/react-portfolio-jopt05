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

    const deleteOrActivate = async(e: any, projectId: string, project_state: boolean) => {
        e.preventDefault();
        if( project_state ) {
            const projectsResponse = await axios.delete<Projects>(`${baseUrl}/api/proyectos/${projectId}`);
            setProjects(
                projects.map(p => {
                    if( p._id == projectId ) {
                        p.project_state = false
                    }
                    return p
                })
            )
        } else {
            const projectsResponse = await axios.put<Projects>(`${baseUrl}/api/proyectos/${projectId}`, {
                project_state: true
            });
            setProjects(
                projects.map(p => {
                    if( p._id == projectId ) {
                        p.project_state = true
                    }
                    return p
                })
            )
        }
    }

    return {
        projects,
        isLoading,
        deleteOrActivate
    }
}