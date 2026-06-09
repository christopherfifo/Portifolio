export interface Project {
  id: number;
  titulo: string;
  tituloEn?: string;
  descricao: string;
  descricaoEn?: string;
  techs: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string; 
}
