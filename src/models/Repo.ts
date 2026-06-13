export class Repo {
  id: number | null;
  name: string;
  html_url: string;
  description: string;
  git_url: string;

  constructor(o: Partial<Repo>) {
    this.id = o?.id || null;
    this.name = o?.name || "";
    this.html_url = o?.html_url || "";
    this.description = o?.description || "";
    this.git_url = o?.git_url || "";
  }
}
