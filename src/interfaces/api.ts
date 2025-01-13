export interface ServicesResponse {
    timestamp: Date;
    status:    string;
    code:      number;
    message:   string;
    payload:   Service[];
}

export interface Service {
    id:                 number;
    serviceName:        string;
    serviceDescription: string;
    serviceTopic:       string;
    serviceImage:       string;
    serviceState:       boolean;
    createdAt:          Date;
    updatedAt:          Date;
}

export interface ProjectResponse {
    timestamp: Date;
    status:    string;
    code:      number;
    message:   string;
    payload:   Project[];
}

export interface Project {
    id:                  number;
    projectName:         string;
    projectDescription:  string;
    projectTechnologies: ProjectTechnology[];
    projectTopic:        string;
    projectState:        boolean;
    projectUrl:          string;
    createdAt:           Date;
    updatedAt:           Date;
}

export interface ProjectTechnology {
    id:        number;
    techName:  string;
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface BlogsResponse {
    timestamp: Date;
    status:    string;
    code:      number;
    message:   string;
    payload:   Blog[];
}

export interface Blog {
    id:        number;
    blogName:  string;
    blogText:  string;
    blogState: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface BlogResponse {
    timestamp: Date;
    status:    string;
    code:      number;
    message:   string;
    payload:   Blog;
}

export interface LoginResponse {
    timestamp: Date;
    status:    string;
    code:      number;
    message:   string;
    payload:   string;
}

