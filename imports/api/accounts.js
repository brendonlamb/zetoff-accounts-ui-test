// Accounts
Accounts.config({
  sendVerificationEmail: false,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/',
});

// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY',
//   loginPath: '/profile',
//   signUpPath: '/profile',
//   resetPasswordPath: '/profile',
//   profilePath: '/profile',
//   onSignedInHook: () => FlowRouter.go('/'),
//   onSignedOutHook: () => FlowRouter.go('/'),
//   minimumPasswordLength: 6
// });