//created with AI
const { execSync, spawn } = require("childe_process");
const fs = require("fs");
const path = require("path");

class GitManager {
  constructor(repoPath = process.cwd()) {
    this.repoPath = repoPath;
  }

  status() {
    try {
      const output = execSync("git status --porcelain", {
        cwd: this.repoPath,
        encoding: "utf8",
      });
      const lines = output
        .trim()
        .split("\n")
        .filter((line) => line);

      return {
        hasChanges: lines.length > 0,
        staged: lines.filter((l) => !l.startsWith("??")),
        untracked: lines.filter((l) => l.startsWith("??")),
        summary: lines.map((l) => l.substring(3)),
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  quickCommit(message = "Update") {
    try {
      execSync("git add .", { cwd: this.repoPath, stdio: "inherit" });
      execSync(`git commit -m "${message}"`, {
        cwd: this.repoPath,
        stdio: "inherit",
      });
      return true;
    } catch (error) {
      console.error("Commit failed:", error.message);
      return false;
    }
  }

  createBranch(name) {
    try {
      execSync(`git checkout -b ${name}`, {
        cwd: this.repoPath,
        stdio: "inherit",
      });
      return true;
    } catch (error) {
      console.error("Branch creation failed:", error.message);
      return false;
    }
  }

  log(count = 10) {
    try {
      const output = execSync(`git log --oneline -n ${count}`, {
        cwd: this.repoPath,
        encoding: "utf8",
      });
      return output.trim().split("\n");
    } catch (error) {
      return [`Error: ${error.message}`];
    }
  }

  checkIgnoredFiles() {
    try {
      const output = execSync("git status --ignored --porcelain", {
        cwd: this.repoPath,
        encoding: "utf8",
      });

      const ignored = output
        .trim()
        .split("\n")
        .filter((line) => line.startsWith("!!"))
        .map((line) => line.substring(3));

      return ignored;
    } catch (error) {
      return [];
    }
  }
}

module.exports = { GitManager };

if (require.main === module) {
  const git = new GitManager();
  const status = git.status();

  console.log("=== GIT STATUS ===");
  console.log(`Изменений: ${status.staged.length + status.untracked.length}`);
  console.log(`Отслеживаемых: ${status.staged.length}`);
  console.log(`Неотслеживаемых: ${status.untracked.length}`);

  if (status.summary.length > 0) {
    console.log("\nИзменения:");
    status.summary.forEach((file) => console.log(`  ${file}`));
  }
}
