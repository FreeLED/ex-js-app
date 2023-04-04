// 取得DOM元素
const showFormButton = document.getElementById('show-form-button');
const formContainer = document.getElementById('form-container');
const myForm = document.getElementById('my-form');
const popupContainer = document.getElementById('popup-container');
const popupMessage = document.getElementById('popup-message');

// 當按鈕被點擊時
showFormButton.addEventListener('click', () => {
  // 顯示表單
  formContainer.classList.add('visible');
});

// 當表單被提交時
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 防止表單提交
  const inputValue = document.getElementById('my-input').value;
  // 隱藏表單
  formContainer.classList.remove('visible');
  // 顯示彈跳視窗
  popupMessage.textContent = `你輸入的是：${inputValue}`;
  popupContainer.classList.add('visible');
});
