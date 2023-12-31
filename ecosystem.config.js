module.exports = {
  apps : [{
    name: 'strapi-dev',
    cwd: '/home/lily/chat-backend',
    script: 'npm',
    args: 'start',
    error_file: '/home/lily/err.log',
    out_file: '/home/lily/out.log'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
