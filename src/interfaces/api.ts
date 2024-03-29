// Generated by https://quicktype.io

export interface Services {
    services: Service[];
    msg:      string;
}

export interface Service {
    service_state:       boolean;
    _id:                 string;
    service_name:        string;
    service_description: string;
    service_topic:       number;
    service_image:       string;
    __v:                 number;
}

// Generated by https://quicktype.io

export interface Projects {
    projects: Project[];
    msg:      string;
}

export interface Project {
    project_tecnologies: ProjectTecnology[];
    project_state:       boolean;
    _id:                 string;
    project_name:        string;
    project_description: string;
    project_topic:       number;
    project_url:         string;
    __v:                 number;
}

export interface ProjectTecnology {
    _id:       string;
    tech_name: string;
}

// Generated by https://quicktype.io

export interface User {
    msg:   string;
    token: string;
}

// Generated by https://quicktype.io

export interface Blogs {
    blogs: Blog[];
    msg:   string;
}

export interface Blog {
    createdAt:  string;
    _id:        string;
    blog_name:  string;
    blog_text:  string;
    __v:        number;
    blog_state: boolean;
}

// Generated by https://quicktype.io

export interface GetBlog {
    msg:  string;
    blog: Blog;
}

export interface Blog {
    createdAt:  string;
    blog_state: boolean;
    _id:        string;
    blog_name:  string;
    blog_text:  string;
    __v:        number;
}

