/* Images */
import folder from "../../../assets/Apps/folder.svg"



/* Render */
const FolderApp = () => {
  const dates: Date = new Date()

  type Files = {
    id: number
    boxFolder: string
    containImage: string
    folderImage: string
    containText: string
    alt: string
    titles: string
    num: number
  }
  const Archive: Files[] = [
    {id: 1, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Android", num: 12},
    {id: 2, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Audiobooks", num: 2},
    {id: 3, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "com.android.settings", num: 51},
    {id: 4, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "com.nexia.bluetooth", num: 9},
    {id: 5, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "DCIM", num: 4},
    {id: 6, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Nexia", num: 27},
    {id: 7, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Music", num: 14},
    {id: 8, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Notifications", num: 18},
    {id: 9, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "Pictures", num: 5},
    {id: 10, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "PhoneBackupRestore", num: 2},
    {id: 11, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "sepolicy_extends", num: 1},
    {id: 12, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "termsofuse", num: 1},
    {id: 13, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "sudoku", num: 0},
    {id: 14, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "calculator", num: 1},
    {id: 15, boxFolder: "box-app-folder", containImage: "contain-app-folder-image", folderImage: "image-app-folder", containText: "contain-app-text", alt: "Image folder", titles: "money", num: 1},
  ]

  return (
    <>
      <div className="Container-app-screen-folder">

        <div className="box-app-screen-folder-a">
          <div className="box-app-screen-folder-title">
            <p>Almacenamiento interno</p>
          </div>
        </div>

        <div className="box-app-screen-folder-b">
          {Archive.map(v => (
            <div key={v.id} className={v.boxFolder}>
              <div className={v.containImage}>
                <img className={v.folderImage} src={folder} alt={v.alt} />
              </div>
              <div className={v.containText}>
                <h4>{v.titles}</h4>
                <p>{v.num} elementos | {String(dates.getFullYear()).padStart(2, "0")}/{String(dates.getMonth() + 1).padStart(2, "0")}/{String(dates.getDay()).padStart(2, "0")}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default FolderApp