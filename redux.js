Action
la hanh dong

// type bat buoc phai co
{ type: 'SEND_FROM_FATHER', data: laptop } // action

{ type: 'SEND_FROM_GIRL_FR', data: gau } // action

{ type: 'SEND_FROM_FRIEND' } // action


Reducer
noi xu ly data nhan duoc tu action

{ type: 'SEND_FROM_FATHER', data: laptop }

{ type: 'SEND_FROM_GIRL_FR', data: gau }

switch (action.type) {
  case SEND_FROM_FATHER:
    // code block
    console.log(action.data) // laptop 
    // do something
    // dan sticker len laptop => de laptop o goc nha => laptop dan sticker
    break;
  case SEND_FROM_GIRL_FR:
    // code block
    console.log(action.data) // gau 
    // do something
    // de gau o tren giuong  => gau
    break;
  case SEND_FROM_FRIEND:
    // code block
    console.log(action) // nothing 
    // do something

    break;

  default:
  // code block
}



Store


=================
UI
lay duoc:
laptop dan sticker
gau


