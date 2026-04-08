function closeAllBlind() {
  const blinds = [
    'blindChatting',
    'blindSetting',
    'blindProfile',
    'blindMenu_Burger'
  ]
  blinds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none'
    }
  })
  const buttons = document.querySelectorAll('.menu_bar_button');
  buttons.forEach(btn => btn.classList.remove('active'));
}

function toggleBlind_chatting() {
  const chatting = document.getElementById('blindChatting');
  const btn = event.currentTarget;
  if (chatting.style.display === 'none' || chatting.style.display === '') {
    closeAllBlind();
    chatting.style.display = 'block';
    btn.classList.add('active');
  } else {
    chatting.style.display = 'none';
    btn.classList.remove('active');
  }
}

function toggleBlind_setting() {
  const setting = document.getElementById('blindSetting');
  const btn = event.currentTarget;
  if (setting.style.display === 'none' || setting.style.display === '') {
    closeAllBlind();
    setting.style.display = 'block';
    btn.classList.add('active');
  } else {
    setting.style.display = 'none';
    btn.classList.remove('active');
  }
}

function toggleBlind_home() {
  closeAllBlind()
}

function toggleBlind_profile() {
  const profile = document.getElementById('blindProfile');
  const btn = event.currentTarget;
  if (profile.style.display === 'none' || profile.style.display === '') {
    closeAllBlind();
    profile.style.display = 'block';
    btn.classList.add('active');
  } else {
    profile.style.display = 'none';
    btn.classList.remove('active');
  }
}

function toggleBlind_menu_burger() {
  const menu_burger = document.getElementById('blindMenu_Burger');
  const btn = event.currentTarget;
  if (menu_burger.style.display === 'none' || menu_burger.style.display === '') {
    closeAllBlind();
    menu_burger.style.display = 'block';
    btn.classList.add('active');
  } else {
    menu_burger.style.display = 'none';
    btn.classList.remove('active');
  }
}