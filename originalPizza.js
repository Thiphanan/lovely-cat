pizza = ["Hawaiian","Seafood","Seafood Deluxe","Pepperoni"];
//price = [159,299,359,299];
size = [ "small", "medium", "large", "New York"];
price = [ [0,159,259,399],
          [259,299,399,499],
          [299,359,459,599],
          [0,259,359,459] ];
edge = ["หนานุ่ม", "บางกรอบ", "Cheese", "ระเบิด", "ไส้กรอก"];
edgePirce = [0,50,70,150,80];          
picture = ["hawaiian.jpg","seafood.jpg","seafooddeluxe.jpg","pepperoni.jpg"];
var rowNumber = 0;

function startup() {
    document.write("Pizza Shop of DSI # 2");
    pizzaTable = document.createElement("table");
    pizzaTable.setAttribute("id","orderTable");
    pizzaTable.setAttribute("border","1");
    document.body.appendChild(pizzaTable);
    header = pizzaTable.createTHead();
    row = header.insertRow(0);
    cell = row.insertCell(0); cell.innerHTML = "Number";
    cell = row.insertCell(1); cell.innerHTML = "Pizza";
    cell = row.insertCell(2); cell.innerHTML = "Yummy";
    cell = row.insertCell(3); cell.innerHTML = "Size";
    cell = row.insertCell(4); cell.innerHTML = "Thickness";
    cell = row.insertCell(5); cell.innerHTML = "Amount";
    cell = row.insertCell(6); cell.innerHTML = "Price";
    rowNumber=1;
    insertPizza();
    addButton = document.createElement("input");
    addButton.setAttribute("type","button");
    addButton.setAttribute("value","+ more pizza");
    addButton.setAttribute("onclick","insertPizza()");
    document.body.appendChild(addButton);
}

function insertPizza() {
    newRow = pizzaTable.insertRow(rowNumber);
    cell = newRow.insertCell(0);
    cell.innerHTML = rowNumber;
    cell = newRow.insertCell(1);
    selectPizza = document.createElement("select");
    selectPizza.setAttribute("id","pizzaList"+rowNumber);
    selectPizza.setAttribute("onchange","showImage("+rowNumber+")");
    op = document.createElement("option");
    op.setAttribute("value","Default");
    op.innerHTML = "Choose Pizza";
    selectPizza.appendChild(op);

    for (let i = 0; i < pizza.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value",pizza[i]);
        op.innerHTML = pizza[i] +" "+ price[i][0] + "-" + price[i][3]+" bath";
        selectPizza.appendChild(op);
        
    }
    cell.appendChild(selectPizza);

    cell = newRow.insertCell(2);
    imgPizza = document.createElement("img");
    imgPizza.setAttribute("id","pizzaImage"+rowNumber);
    imgPizza.setAttribute("src","");
    imgPizza.setAttribute("width","80%");
    cell.appendChild(imgPizza);

    cell = newRow.insertCell(3);
    selectSize = document.createElement("select");
    selectSize.setAttribute("id","size"+rowNumber);
    selectSize.setAttribute("onchange","calculatePrice("+rowNumber+")");
    for (let i = 0; i < size.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value",size[i]);
        op.innerHTML = size[i];
        selectSize.appendChild(op);
    }
    cell.appendChild(selectSize);

    cell = newRow.insertCell(4);
    selectEdge = document.createElement("select");
    selectEdge.setAttribute("id","edge"+rowNumber);
    selectEdge.setAttribute("onchange","calculatePrice("+rowNumber+")");
    for (let i = 0; i < edge.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value",edge[i]);
        op.innerHTML = edge[i];
        selectEdge.appendChild(op);
    }
    cell.appendChild(selectEdge);

    cell = newRow.insertCell(5);
    inputAmount = document.createElement("input");
    inputAmount.setAttribute("type","number");
    inputAmount.setAttribute("id","amount"+rowNumber);
    inputAmount.setAttribute("onchange","calculatePrice("+rowNumber+")");
    cell.appendChild(inputAmount);

    cell = newRow.insertCell(6);
    inputPrice = document.createElement("input");
    inputPrice.setAttribute("type","text");
    inputPrice.setAttribute("id","price"+rowNumber);
    inputPrice.setAttribute("disabled","");
    cell.appendChild(inputPrice);

    rowNumber++;
    
}

function showImage(row) {
  userChoice = pizzaSelected(row);  
  document.getElementById("pizzaImage"+row).src = picture[userChoice];
}

function pizzaSelected(row) {
    var pizzaC = document.getElementById("pizzaList"+row);
    var chosenPizzaIndex = pizzaC.selectedIndex-1;
    return chosenPizzaIndex;
}
function sizeSelected(row){
    var sizeC = document.getElementById("size"+row);
    var chosenSizeIndex = sizeC.selectedIndex; 
    return chosenSizeIndex;
}
function edgeSelected(row) {
    var edgeC = document.getElementById("edge"+row);
    var chosenEdgeIndex = edgeC.selectedIndex;
    return chosenEdgeIndex;
}
function calculatePrice(row) {
    userChoice =pizzaSelected(row);
    piece =  document.getElementById("amount"+row).value ;
    sizeChoice = sizeSelected(row);
    edgeChoice = edgeSelected(row);
    //pizzaPrice = piece * price[userChoice];
    if (price[userChoice][sizeChoice] == 0 ){
        pizzaAndEdge = 0; 
        alert(pizza[userChoice]+" size "+size[sizeChoice]+" is not available!");
    }else{
        pizzaAndEdge = price[userChoice][sizeChoice] + edgePirce[edgeChoice]
    }
    pizzaPrice = pizzaAndEdge*piece;
    document.getElementById("price"+row).value = pizzaPrice;
}