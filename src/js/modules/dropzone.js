import Dropzone from "dropzone";
import 'dropzone/dist/basic.css';
import 'dropzone/dist/dropzone.css';

const fileUploads = document.querySelectorAll('.file-upload');

window.filesToUpload = [];

const dropzones = [];
// let dropzoneError = $('.error-message');
// let dropzoneSuccess = $('.success-message');

if (fileUploads.length) {
	fileUploads.forEach(function (fileUpload, idx) {
		dropzones[idx] = new Dropzone(fileUpload, {
			url: 'https://alexsab.ru/lead/kuzovsamara/',
			// url: '#',
			autoProcessQueue: false,
			addRemoveLinks: true,
			// parallelUploads: 1,
			acceptedFiles: '.jpg,.jpeg,.png',
			maxFiles: 10,
			maxFilesize: 10,
			dictDefaultMessage: '<div class="dz-message text-black text-center !my-0 text-sm sm:text-base">Вы можете приложить фотографии, не более 10</div>',
			dictFallbackMessage: "Ваш браузер не поддерживает загрузку перетаскиванием",
			dictFallbackText: "Пожалуйста, используйте резервную форму ниже, чтобы загрузить свои файлы, как в старые добрые времена)",
			dictFileTooBig: "Слишком большой файл ({{filesize}}Мб). Максимальный размер: {{maxFilesize}}Мб.",
			dictInvalidFileType: "Вы не можете загрузить файлы этого типа.",
			dictResponseError: "Сервер вернул ответ {{statusCode}}.",
			dictCancelUpload: "Отменить загрузку",
			dictUploadCanceled: "Загрузка завершена.",
			dictCancelUploadConfirmation: "Вы уверены, что хотите отменить?",
			dictRemoveFile: "Удалить файл",
			dictRemoveFileConfirmation: "Хотите удалить файл?",
			dictMaxFilesExceeded: 'Привышен лимит изображений',
			dictFileSizeUnits: {
				tb: "Тб",
				gb: "Гб",
				mb: "Мб",
				kb: "Кб",
				b: "байт"
			},
			removedfile(file) {
				// console.log(file);
				if (file.previewElement != null && file.previewElement.parentNode != null) {
					file.previewElement.parentNode.removeChild(file.previewElement);
				}
				return this._updateMaxFilesReachedClass();
			},
			addedfile: function(file) {
				window.filesToUpload.push(file);
				let reader = new FileReader();

				reader.onload = ((theFile) => {
					return (e) => {
						// Получаем Data URL из файла
						let dataUrl = e.target.result;

						// Вызываем метод для установки миниатюры
						this.emit("thumbnail", file, dataUrl);
					};
				})(file);
				// Читаем файл как Data URL
				reader.readAsDataURL(file);
			}
			// success: function(file, response){
			// 	// console.log("success", file);
			// }
		});
	})
}

// Dropzone.confirm = function (question, accepted, rejected) {
// 	showConfirm(question);
// 	$(document).on('click', '#accept-confirm', function () {
// 		hideConfirm();
// 		accepted();
// 	});
// };

// console.log(dropzones);