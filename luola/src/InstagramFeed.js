const InstagramFeed = () => {
    return (
        <div className="instagram-feed section"> {/* Added 'section' class */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://5d8fdfa7344440058cf52f8df9ff458d.elf.site" width="100%" height="100%" frameborder="0px" style="min-height: 600px;"></iframe>` // Change height to 100%
                }}
            />
        </div>
    );
};

export default InstagramFeed;
