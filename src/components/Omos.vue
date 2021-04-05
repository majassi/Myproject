<template>
    <h1>Hvem er vi?</h1>
     <div class="box-wrapper">
        <div id="box1">
            GeeksforGeeks 1
        </div>
  
        <div id="box2">
            GeeksforGeeks 2
        </div>
  
        <div id="box3">
            <div id="box4">
                GeeksforGeeks 4
            </div>
            
            <div id="box8">
                GeeksforGeeks 8
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

    <style>
        body,
        html {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
  
        .box-wrapper {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
        }
  
        #box1 {
            padding: 10px;
            height: 30px;
            line-height: 30px;
            border: solid 1px green
        }
  
        #box2 {
            height: 15px;
            padding: 8px;
            border: solid 1px blue
        }
  
        #box3 {
            padding: 10px;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            border: solid 1px green
        }
  
        #box4 {
            flex-grow: 2;
            border: solid 1px orange
        }
  
        .middle-column {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
  
        }
  
        .middle-column div {
            flex-grow: 1;
            margin: 0 8px;
            border: solid 1px red;
        }
  
        .middle-column div+div {
            margin-top: 8px
        }
  
        #box8 {
            flex-grow: 1;
            border: solid 1px black
        }
    </style>