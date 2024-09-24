// donate -1
document.getElementById('donate-now-1').addEventListener('click', function () {
    const donateInput1 = document.getElementById('input-1').value;
    const mainBalance = document.getElementById('mainballance').innerText;
    const mainBalanceConvert = parseFloat(mainBalance);
    const donateInput1Convert = parseFloat(donateInput1);
    const ballance1 = document.getElementById('ballance1').innerText;
    const balance1Convert = parseFloat(ballance1);


    if (donateInput1Convert > 0 && mainBalanceConvert >= donateInput1Convert) {
        const newBalance = mainBalanceConvert - donateInput1Convert;
        const newBalance1 = balance1Convert + donateInput1Convert;
        document.getElementById('mainballance').innerText = newBalance;
        document.getElementById('ballance1').innerText = newBalance1;
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-8 m-8 border-2 border-gray-300 rounded-xl ';
        historyItem.innerHTML = `
        
        <p class="text-xl font-bold ">${donateInput1} Taka is Donated for Flood at Noakhali, Bangladesh</p>
          <p class="pt-4 text-gray-400 ">date : ${new Date()}</p>
        `
        const historyContainer = document.getElementById('history-section');
        historyContainer.classList.remove('hidden')
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        document.getElementById("my_modal_1").showModal();
    
    }
    else if (donateInput1Convert > mainBalanceConvert) {
        alert("Not Enough Balance")
    }
    else {
        alert("Please Enter Correct Value")
    }
  
})

// donate-2
document.getElementById('donate-now-2').addEventListener('click', function (event) {
    event.preventDefault();
    const donateInput1 = document.getElementById('input-2').value;
    const mainBalance = document.getElementById('mainballance').innerText;
    const mainBalanceConvert = parseFloat(mainBalance);
    const donateInput1Convert = parseFloat(donateInput1);
    const ballance1 = document.getElementById('ballance2').innerText;
    const balance1Convert = parseFloat(ballance1);


    if (donateInput1Convert > 0 && mainBalanceConvert >= donateInput1Convert) {
        const newBalance = mainBalanceConvert - donateInput1Convert;
        const newBalance1 = balance1Convert + donateInput1Convert;
        document.getElementById('mainballance').innerText = newBalance;
        document.getElementById('ballance2').innerText = newBalance1;
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-8 m-8 border-2 border-gray-300 rounded-xl ';
        historyItem.innerHTML = `
        
        <p class="text-xl font-bold ">${donateInput1} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
          <p class="pt-4 text-gray-400 ">date : ${new Date()}</p>
        `
        const historyContainer = document.getElementById('history-section');
        historyContainer.classList.remove('hidden')
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        document.getElementById("my_modal_1").showModal();
    
    }
    else if (donateInput1Convert > mainBalanceConvert) {
        alert("Not Enough Balance")
    }
    else {
        alert("Please Enter Correct Value")
    }
  
})

// donate 3
document.getElementById('donate-now-3').addEventListener('click', function (event) {
    event.preventDefault();
    const donateInput1 = document.getElementById('input-3').value;
    const mainBalance = document.getElementById('mainballance').innerText;
    const mainBalanceConvert = parseFloat(mainBalance);
    const donateInput1Convert = parseFloat(donateInput1);
    const ballance3 = document.getElementById('ballance3').innerText;
    const balance1Convert = parseFloat(ballance3);


    if (donateInput1Convert > 0 && mainBalanceConvert >= donateInput1Convert) {
        const newBalance = mainBalanceConvert - donateInput1Convert;
        const newBalance3 = balance1Convert + donateInput1Convert;
        document.getElementById('mainballance').innerText = newBalance;
        document.getElementById('ballance3').innerText = newBalance3;
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-8 m-8 border-2 border-gray-300 rounded-xl ';
        historyItem.innerHTML = `
        
        <p class="text-xl font-bold ">${donateInput1} Taka is Donated for Aid for Injured in the Quota Movement, Banglades</p>
          <p class="pt-4 text-gray-400 ">date : ${new Date()}</p>
        `
        const historyContainer = document.getElementById('history-section');
        historyContainer.classList.remove('hidden')
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        document.getElementById("my_modal_1").showModal();

    }
    else if (donateInput1Convert > mainBalanceConvert) {
        alert("Not Enough Balance")
    }
    else {
        alert("Please Enter Correct Value")
    }
   
})
// button-history

const historyBtn = document.getElementById('history');
historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-primary-btn');
    document.getElementById('blog').classList.remove('bg-primary-btn');
    document.getElementById('main-tab').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('hidden-vai').classList.remove('hidden');
});


const blogBtn = document.getElementById('blog');
  blogBtn.addEventListener('click', function () {
    blogBtn.classList.add('bg-primary-btn');
    document.getElementById('history').classList.remove('bg-primary-btn');
    document.getElementById('main-tab').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});