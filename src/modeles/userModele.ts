export interface UserSummary {
  id: number;
  nom: string;
  prenom: string;
  userProfile?: string;
}

export interface UserRegister {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  motDePasseConfirmation: string;
}

export interface UserLogin {
  email: string;
  motDePasse: string;
}
