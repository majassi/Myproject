<template>
    <h1>Kontakt os</h1>
    <div>
    <h1>C</h1>
    <input v-model="content"/>
    <h4>{{content}}</h4>
    <button @click="addContent">Add Content</button>

    <h1>R</h1>
 <div v-for="doc in documents" :key="doc.id" >
     {{ doc.content }}
  </div>

  <h1>U</h1>

     <div v-for="doc in documents" :key="doc.id" >
     <input v-model="doc.content" />
     <button @click="editContent(doc.id, doc.content)">edit</button>
  </div>

    <h1>D</h1>
   <div v-for="doc in documents" :key="doc.id" >
     {{ doc.content }}
     <button @click="deleteContent(doc.id)">delete</button>
  </div>

  <h1>Image upload</h1>

  <form @submit.prevent="handleSubmit">
     <input type="text" required placeholder="Image title" v-model="imgTitle">
    <input type="file" @change="handleChange"> <br><br>
    <button>Upload Image</button>
  </form>

<h1>Delete Image</h1>

   <div v-for="img in imgDocs" :key="img.createdAt" >
     <br>
     <h3>{{img.id}}</h3>
     <img width="150" :src="img.imageUrl" alt="img.imgTitle">
     <button @click="deleteImg(img.filePath, img.id)">delete Image</button>
  </div>

   

  </div>
</template>

<script>
export default {

}
</script>
