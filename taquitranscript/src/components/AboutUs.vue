<template>
    <v-app id="inspire">
      <v-main class="blue-grey lighten-2">
        <v-container>
          <v-row >
              <v-col>
              <v-sheet
                min-height="65vh"
                rounded="lg"
                elevation="20"
              >
              <p class="text-h2 text--primary text-center">
                  <br>The Kitchen Corner
              </p>
  
              <v-sheet class="d-block text-center mx-auto mb-9 pa-12 text-h5" width="700"><br>
              Somos un grupo de estudiante de la Universidad Nacional de San Agustín de Arequipa que busca ayudar en la compra y venta de cocinas online a nivel. Para ello hemos creado una página web de una tienda online exclusivamente de cocinas, la cual las personas podrán hacer uso de manera gratuita y pedir su orden a domicilio. ¡FÁCIL Y RÁPIDO!!!
              </v-sheet>
  
              </v-sheet>
              </v-col>
              <v-col>
                <v-sheet rounded="lg" width="400" height="50" elevation="20">
              <div>
                <p class="text-h5 text--primary text-center pa-2">
                  Integrantes
                </p>
              </div>
                </v-sheet>
                <v-sheet
                  class="text-h5 text-center my-5 pa-1"
                  height="85"
                  width="400"
                  rounded
                  elevation="20"
                >Diego Aquino
                      <v-list-item>
                      <v-btn>
                      <v-list-item-icon>
                        <v-icon> mdi-instagram </v-icon>
                      </v-list-item-icon>
  
                      <v-list-item-title link @click="setIGDiego" > Instagram</v-list-item-title>
                      </v-btn>
  
                      <v-btn>
                      <v-list-item-icon>
                        <v-icon>mdi-facebook</v-icon>
                      </v-list-item-icon>
                
                      <v-list-item-title link @click="setFBDiego">Facebook</v-list-item-title>
                      </v-btn>
                      </v-list-item>
                </v-sheet>
  
                <v-sheet
                  class="text-h5 text-center my-5 pa-1"
                  height="85"
                  width="400"
                  rounded
                  elevation="20"
                >Gabriel Pacco
                      <v-list-item>
                        <v-btn>
                      <v-list-item-icon>
                        <v-icon> mdi-instagram </v-icon>
                      </v-list-item-icon>
  
                      <v-list-item-title link @click="setIGGabriel"> Instagram</v-list-item-title>
                        </v-btn>
                        <v-btn>
                      <v-list-item-icon>
                        <v-icon> mdi-facebook</v-icon>
                      </v-list-item-icon>
                
                      <v-list-item-title link @click="setFBGabriel">Facebook</v-list-item-title>
                        </v-btn>
                      </v-list-item>
                </v-sheet>
                <v-sheet
                  class="text-h5 text-center my-5 pa-1"
                  height="85"
                  width="400"
                  rounded
                  elevation="20"
                >Erick Perez
                    <v-list-item>
                      <v-btn>
                      <v-list-item-icon>
                        <v-icon> mdi-instagram </v-icon>
                      </v-list-item-icon>
  
                      <v-list-item-title link @click="setIGErick"> Instagram</v-list-item-title>
                      </v-btn>
                      <v-btn>
                      <v-list-item-icon>
                        <v-icon> mdi-facebook</v-icon>
                      </v-list-item-icon>
                
                      <v-list-item-title link @click="setFBErick">Facebook</v-list-item-title>
                      </v-btn>
                  </v-list-item>
                </v-sheet>
                <v-img 
                max-width="400"
                src= "@/img/TrabajoEnGrupo.jpg">
                </v-img>
              </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({
        selectedItem: 0,
        items: [
          { text: 'Diego Aquino', instagram: "https://www.instagram.com/diego_aquino_7w7/", facebook: 'https://www.facebook.com/Diego.AquinoQ/'},
          { text: 'Gabriel Pacco', instagram: 'https://www.instagram.com/gabriel_dev__/', facebook: 'https://www.facebook.com/gabriel.pacco.3' },
          { text: 'Kerito Won', instagram: 'https://www.instagram.com/kerito_17/', facebook: 'https://www.facebook.com/profile.php?id=100004004602419' },
        ],
        social: [
          ['Instagram', 'mdi-instagram'],
          ['Facebook', 'mdi-facebook'],
        ],
      }),
      methods:{
  
        setIGDiego(){
          window.location.href = "https://www.instagram.com/diego_aquino_7w7/";
          },
        setIGGabriel(){
          window.location.href = "https://www.instagram.com/gabriel_dev__/";
          },
        setIGErick(){
          window.location.href = "https://www.instagram.com/kerito_17/";
          },
        setFBDiego(){
          window.location.href = "https://www.facebook.com/Diego.AquinoQ/";
          },
        setFBGabriel(){
          window.location.href = "https://www.facebook.com/gabriel.pacco.3";
          },
        setFBErick(){
          window.location.href = "https://www.facebook.com/profile.php?id=100004004602419";
          },
  
      }
    }
  
  </script>
  
  