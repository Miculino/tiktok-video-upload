// Components
import Card from "../../_components/Card";

export default function VideoUploadProgress() {
  return (
    <Card className="bg-white">
      <p></p>
      <div>
        <div>
          <span>Size:</span>
          <span>800 MB</span>
        </div>
        <div>
          <span>Duration:</span>
          <span>42m 44s</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            {/* Upload Icon */}
            <i></i>
            <span>Data already loaded</span>
            <span>Total file data</span>
            uploaded...
            <span>5 minutes</span>
            left
          </div>
          <div>
            <span>37.86%</span>
          </div>
        </div>

        <div>
          <span>Progress bar</span>
        </div>
      </div>
    </Card>
  );
}
