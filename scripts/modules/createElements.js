const createRow = ({ id, title, category, units, count, price, image, discount }) => {
  const tr = document.createElement('tr');
  tr.classList.add('cms__tr');
  tr.dataset.id = id;

  const arr = [id, title, category, units, count];

  if (image) tr.dataset.pic = image;

  arr.forEach(item => {
    const td = document.createElement('td');
    td.classList.add('cms__td');
    td.textContent = item;
    tr.append(td);
  });

  const priceTd = document.createElement('td');
  priceTd.classList.add('cms__td');
  priceTd.textContent = '$' + price;
  tr.append(priceTd);

  const totalTd = document.createElement('td');
  totalTd.classList.add('cms__td');
  totalTd.textContent = '$' + price * count;
  tr.append(totalTd);

  tr.insertAdjacentHTML(
    'beforeend',
    `
      <td class="cms__td cms__td_small-padding">
        <button class="table-button table-button_image">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.7778 2.22223H2.22223C1.92754 2.22223 1.64493 2.33929 1.43655 2.54767C1.22818 2.75604 1.11111 3.03866 1.11111 3.33334V16.6667C1.11111 16.9614 1.22818 17.244 1.43655 17.4523C1.64493 17.6607 1.92754 17.7778 2.22223 17.7778H17.7778C18.0725 17.7778 18.3551 17.6607 18.5635 17.4523C18.7718 17.244 18.8889 16.9614 18.8889 16.6667V3.33334C18.8889 3.03866 18.7718 2.75604 18.5635 2.54767C18.3551 2.33929 18.0725 2.22223 17.7778 2.22223ZM2.22223 16.6667V3.33334H17.7778V16.6667H2.22223Z" fill="#6E6893"/>
            <path d="M4.95555 7.77778C5.28518 7.77778 5.60741 7.68003 5.8815 7.49689C6.15558 7.31376 6.3692 7.05346 6.49535 6.74892C6.62149 6.44437 6.6545 6.10926 6.59019 5.78596C6.52588 5.46266 6.36715 5.16569 6.13406 4.9326C5.90097 4.69951 5.604 4.54078 5.2807 4.47647C4.9574 4.41216 4.62228 4.44516 4.31774 4.57131C4.0132 4.69746 3.7529 4.91108 3.56976 5.18516C3.38663 5.45924 3.28888 5.78147 3.28888 6.11111C3.28888 6.55314 3.46447 6.97706 3.77703 7.28962C4.0896 7.60218 4.51352 7.77778 4.95555 7.77778ZM4.95555 5.22222C5.13158 5.22112 5.30399 5.27232 5.45089 5.36932C5.5978 5.46632 5.71259 5.60476 5.78072 5.76708C5.84885 5.9294 5.86725 6.1083 5.83358 6.28109C5.79992 6.45389 5.7157 6.61279 5.59161 6.73766C5.46752 6.86253 5.30915 6.94774 5.13657 6.98249C4.96399 7.01724 4.78498 6.99997 4.62223 6.93285C4.45949 6.86574 4.32033 6.75182 4.22241 6.60552C4.12449 6.45923 4.07222 6.28715 4.07221 6.11111C4.07367 5.87729 4.1672 5.65345 4.33255 5.48811C4.49789 5.32277 4.72172 5.22923 4.95555 5.22778V5.22222Z" fill="#6E6893"/>
          <path
            d="M12.6555 8.53889L9.65555 11.5389L7.43332 9.31666C7.32923 9.21319 7.18843 9.15511 7.04166 9.15511C6.89489 9.15511 6.75408 9.21319 6.64999 9.31666L3.28888 12.7222V14.2944L7.0611 10.5222L8.88888 12.3222L6.80555 14.4056H8.33332L13.0278 9.71111L16.6667 13.3333V11.7667L13.4389 8.53889C13.3348 8.43541 13.194 8.37733 13.0472 8.37733C12.9004 8.37733 12.7596 8.43541 12.6555 8.53889Z" fill="#6E6893"/>
        </svg>
        </button>
      </td>
      <td class="cms__td cms__td_small-padding">
        <button class="table-button table-button_edit">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2015_14)">
              <path
                d="M15.5629 4.86078L17.6394 6.93629L15.5629 4.86078ZM16.8982 3.03233L11.2834 8.64709C10.9933 8.9368 10.7955 9.3059 10.7148 9.70789L10.1962 12.304L12.7923 11.7844C13.1942 11.704 13.5629 11.5069 13.8531 11.2167L19.4678 5.60196C19.6366 5.43324 19.7704 5.23293 19.8617 5.01248C19.953 4.79203 20 4.55576 20 4.31714C20 4.07853 19.953 3.84225 19.8617 3.6218C19.7704 3.40136 19.6366 3.20105 19.4678 3.03233C19.2991 2.8636 19.0988 2.72976 18.8784 2.63845C18.6579 2.54714 18.4216 2.50014 18.183 2.50014C17.9444 2.50014 17.7081 2.54714 17.4877 2.63845C17.2672 2.72976 17.0669 2.8636 16.8982 3.03233V3.03233Z"
                stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M18.0394 14.2648V17.206C18.0394 17.726 17.8328 18.2248 17.4651 18.5925C17.0973 18.9602 16.5986 19.1668 16.0786 19.1668H5.29415C4.77411 19.1668 4.27537 18.9602 3.90765 18.5925C3.53993 18.2248 3.33334 17.726 3.33334 17.206V6.42157C3.33334 5.90154 3.53993 5.4028 3.90765 5.03508C4.27537 4.66735 4.77411 4.46077 5.29415 4.46077H8.23535"
                stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2015_14">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </td>
      <td class="cms__td cms__td_small-padding">
        <button class="table-button table-button_delete">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.03125 1.59375H4.875C4.96094 1.59375 5.03125 1.52344 5.03125 1.4375V1.59375H10.9688V1.4375C10.9688 1.52344 11.0391 1.59375 11.125 1.59375H10.9688V3H12.375V1.4375C12.375 0.748047 11.8145 0.1875 11.125 0.1875H4.875C4.18555 0.1875 3.625 0.748047 3.625 1.4375V3H5.03125V1.59375ZM14.875 3H1.125C0.779297 3 0.5 3.2793 0.5 3.625V4.25C0.5 4.33594 0.570312 4.40625 0.65625 4.40625H1.83594L2.31836 14.6211C2.34961 15.2871 2.90039 15.8125 3.56641 15.8125H12.4336C13.1016 15.8125 13.6504 15.2891 13.6816 14.6211L14.1641 4.40625H15.3438C15.4297 4.40625 15.5 4.33594 15.5 4.25V3.625C15.5 3.2793 15.2207 3 14.875 3ZM12.2832 14.4062H3.7168L3.24414 4.40625H12.7559L12.2832 14.4062Z"
              fill="#6E6893" />
          </svg>
        </button>
      </td>
    `,
  );

  return tr;
};

export default createRow;
