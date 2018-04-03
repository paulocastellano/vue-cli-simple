<template>
    <div>
        <div v-if="inspectionQuestion.type == 'text'" class="row">
          <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-body">

                  <div class="col-xs-12">
                    <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <input type="text" class="form-control" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][name]'" maxlength="255" placeholder="Comece a digitar aqui..." data-parsley-required="true" data-parsley-errors-messages-disabled/>
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div v-else-if="inspectionQuestion.type == 'image'" class="row">
          <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-body">

                  <div class="col-xs-12">
                      <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>
                  <div class="col-xs-12">

                      <!--
                      /*
                       * DROPZONE
                      */
                      -->
                      <p class="text-center"><strong>Clique no Campo abaixo para inserir as Imagens</strong></p>
                      <div id="dropzone">
                          <vue-dropzone
                              ref="myVueDropzone"
                              id="dropzone"
                              :options="dropzoneOptions">
                              <!--
                                v-on:vdropzone-complete="getPhotos(inspectionQuestion.id)"
                                v-on:vdropzone-success="showMessageSuccess()"
                              -->
                          </vue-dropzone>
                      </div>

                      <!--
                      /*
                       * END - DROPZONE
                      */
                      -->

                  </div>
                </div>
            </div>
          </div>
        </div>

        <div v-else-if="inspectionQuestion.type == 'textarea'" class="row">

          <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-body">

                  <div class="col-xs-12">
                      <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <textarea rows="3" class="form-control" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][name]'"></textarea>
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>

                </div>
            </div>
          </div>

        </div>

        <div v-else-if="inspectionQuestion.type == 'number'" class="row">

          <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-body">

                  <div class="col-xs-12">
                      <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <input type="number" class="form-control" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][name]'" maxlength="255">
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>

                </div>
            </div>
          </div>



        </div>

        <div v-else-if="inspectionQuestion.type == 'radio-custom'" class="row">

          <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-body">

                  <div class="col-xs-12">
                      <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <div class="radio-inline" v-for="inspection_option in inspectionQuestion.inspection_options">
                              <label class="font-300">
                                  <input type="radio" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][name]'" :id="inspection_option.id" :value="inspection_option.weight">
                                  {{ inspection_option.name }}
                              </label>
                          </div>
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>

                </div>
            </div>
          </div>
        </div>


        <div v-else-if="inspectionQuestion.type == 'radio'" class="row">

          <div class="col-xs-12">
            <div class="box box-primary">

                <div class="box-body">
                  <div class="col-xs-12">
                      <label :for="inspectionQuestion.id" style="font-size:16px;padding: 10px 0 10px 0;">{{ inspectionQuestion.name }}</label>
                      <div class="form-group">
                          <div class="radio-inline" v-for="inspection_option in inspectionQuestion.inspection_options">
                              <label class="font-300">
                                  <input type="radio" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][name]'" :id="inspection_option.id" :value="inspection_option.weight">
                                  {{ inspection_option.name }}
                              </label>
                          </div>
                          <input type="hidden" :name="'inspection_answers[' + inspectionQuestion.inspection_category_id + '][' + inspectionQuestion.id + '][inspection_question_id]'" :value="inspectionQuestion.id">
                      </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
    </div>
</template>

<script>

    import vue2Dropzone from 'vue2-dropzone';

    export default {
        props: {
            inspectionQuestion: {
                required: true
            },
            photos: [1,2,3]
        },

        components: {
          vueDropzone: vue2Dropzone
        },

        data: function () {
          return {
            show_loading: false,
            Helper: Helper,
            images_question: [],
            dropzoneOptions: {
                url: '../api/photo/inspections/store/' + this.inspectionQuestion.id,
                dictDefaultMessage: "<i class='fa fa-paperclip fa-5x'></i>",
                thumbnailWidth: 134,
                maxFilesize: 3,
                addRemoveLinks: false,
                autoProcessQueue: true,
                init: function(images_question) {

                    this.on("success", function(file, response) {

                        console.log(this.images_question);

                        var photos = [];
                        photos.push({
                          question_id: response.question_id,
                          photo_id: response.photo_id
                        });

                        console.log(photos);

                    })
                }
            }
          }
        },

        mounted: function() {

        },

        methods: {

          showMessageSuccess: function()
          {
              toastr.success('Imagem inserida com Sucesso!');
          }

        }
    }
</script>

<style type="text/css">

</style>
