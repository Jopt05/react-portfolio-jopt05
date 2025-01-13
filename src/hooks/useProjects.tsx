import React, { useEffect, useState } from 'react'
import { Project, ProjectResponse } from '../interfaces/api';
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
        const projectsResponse = await axios.get<ProjectResponse>(`${baseUrl}/projects`);
        setProjects( projectsResponse.data.payload );
        setisLoading(false);
    }

    const deleteOrActivate = async(e: any, projectId: string, project_state: boolean) => {
        e.preventDefault();
        if( project_state ) {
            const projectsResponse = await axios.delete<ProjectResponse>(`${baseUrl}/projects/${projectId}`, {
                data: {
                    projectState: false
                }
            });
            setProjects(
                projects.map(p => {
                    if( p.id.toString() == projectId ) {
                        p.projectState = false
                    }
                    return p
                })
            )
        } else {
            const projectsResponse = await axios.delete<Project>(`${baseUrl}/projects/${projectId}`, {
                data: {
                    projectState: true
                }
            });
            setProjects(
                projects.map(p => {
                    if( p.id.toString() == projectId ) {
                        p.projectState = true
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