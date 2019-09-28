module.exports = {
  description: 'Scaffolding out a tiny library.',
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        required: true
      },
      {
        name: 'description',
        message: 'How would you describe the new project'
      },
      {
        name: 'author',
        message: 'What is your name',
        default: this.gitUser.name,
        store: true,
        required: true
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: ({ author }) => this.gitUser.username || author.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your GitHub email',
        default: this.gitUser.email,
        store: true,
        validate: v => /.+@.+/.test(v)
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**'
      }
    ]
  },
  async completed() {
    await this.gitInit();
    await this.npmInstall({ packageManager: this.npmClient });
  }
}
