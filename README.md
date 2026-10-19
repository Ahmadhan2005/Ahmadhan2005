```bash
╔════════════════════════════════════════╗
║                                        ║
║  AHMADĀN SYAFIERE                      ║
║  > web developer · ui/ux enthusiast    ║
║                                        ║
║  [ ONLINE ] open to collaborate        ║
║                                        ║
╚════════════════════════════════════════╝

$ whoami
ahmadan-syafiere

$ cat about.txt
Mahasiswa Sistem Informasi dari Indonesia.
Fokus membangun web yang bersih, cepat,
dan punya identitas visual yang kuat.
```

```ts
// profile.ts
interface Developer {
  name: string;
  role: string[];
  study: string;
  location: string;
  languages: string[];
  available: boolean;
}

export const ahmadan: Developer = {
  name: "Ahmadān Syafiere",
  role: ["Web Developer", "UI/UX Enthusiast"],
  study: "Sistem Informasi",
  location: "Indonesia",
  languages: ["Indonesia", "English"],
  available: true,
};
```

```ts
// stack.ts
export const stack = {
  frontend: ["Next.js", "React", "Tailwind CSS"],
  language: ["TypeScript", "JavaScript", "PHP"],
  markup:   ["HTML5", "CSS3"],
  database: ["MySQL"],
  design:   ["Figma"],
  tools:    ["VS Code", "Git", "GitHub", "Vercel"],
} as const;
```

```json
{
  "projects": [
    {
      "name": "Portfolio Website",
      "type": "Portfolio",
      "stack": ["Next.js", "Tailwind", "Performance"],
      "status": "live",
      "url": "ahmadcoderfolio.vercel.app"
    },
    {
      "name": "Sistem Informasi",
      "type": "Academic System",
      "stack": ["PHP", "MySQL", "Admin UX"],
      "status": "completed"
    },
    {
      "name": "UI/UX Prototype",
      "type": "Design",
      "stack": ["Figma", "Flows", "Mockups"],
      "status": "completed"
    }
  ]
}
```

```yaml
# focus.yml
now:
  - Clean UI and minimal layouts
  - Dark futuristic aesthetics
  - Web performance and accessibility
learning:
  - TypeScript
  - System Design
  - Motion UI
goals:
  - Ship more real-world projects
  - Contribute to open source
  - Grow as a full-stack developer
```

```python
# workflow.py
class Workflow:
    steps = [
        "research",
        "wireframe",
        "design",
        "build",
        "test",
        "ship",
    ]

    principles = ("minimal", "dark", "neon")

    def run(self):
        for step in self.steps:
            print(f"> {step} ... done")


Workflow().run()
```

```bash
$ git log --oneline -3
a1f9c02 feat: keep learning every day
7be4d11 fix: refactor until it feels clean
3c8e5a7 init: start building ideas

$ ahmadan --contact
> portfolio : https://ahmadcoderfolio.vercel.app
> github    : https://github.com/Ahmadhan2005
> email     : emailkamu@example.com

$ echo "Let's build something great."
Let's build something great.
█
```

<p align="center">
  <a href="https://ahmadcoderfolio.vercel.app/"><img src="https://img.shields.io/badge/portfolio-00F0FF?style=flat-square&logo=vercel&logoColor=black" alt="portfolio" /></a>
  <a href="https://github.com/Ahmadhan2005"><img src="https://img.shields.io/badge/github-7C3AED?style=flat-square&logo=github&logoColor=white" alt="github" /></a>
  <a href="mailto:emailkamu@example.com"><img src="https://img.shields.io/badge/email-FF2E97?style=flat-square&logo=gmail&logoColor=white" alt="email" /></a>
</p>
