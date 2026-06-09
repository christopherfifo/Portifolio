export interface Project {
  id: number;
  titulo: string;
  descricao: string;
  techs: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string; 
}
