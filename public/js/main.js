function register() {
    $.ajax({
      url: '/api/register',
      method: 'POST',
      data: {
        username: $('#username').val(),
        password: $('#password').val()
      },
      success: handleAuth,
      error: handleError
    });
  }
  
  function login() {
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: {
        username: $('#username').val(),
        password: $('#password').val()
      },
      success: handleAuth,
      error: handleError
    });
  }
  
  function handleAuth(response) {
    localStorage.setItem('token', response.token);
    $('#user').text(response.username);
    $('#auth-form').hide();
    $('#content').show();
  }
  
  function handleError(err) {
    alert(err.responseJSON.message);
  }
  
  function logout() {
    localStorage.removeItem('token');
    $('#auth-form').show();
    $('#content').hide();
  }